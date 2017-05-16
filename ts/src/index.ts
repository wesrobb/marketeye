import { grpc, BrowserHeaders } from "grpc-web-client";
import { Prices } from "./prices_pb_service";
import { PricesRequest, PricesResponse, PriceEntry } from "./prices_pb";
import * as echarts from "echarts"

declare const USE_TLS: boolean;
const host = USE_TLS ? "https://localhost:9091" : "http://localhost:9090";

function getPrices() {
  const pricesRequest = new PricesRequest();
  pricesRequest.setShortCode("SHP");
  pricesRequest.setExchange("JSE");
  grpc.invoke(Prices.GetPrices, {
    request: pricesRequest,
    host: host,
    onHeaders: (headers: BrowserHeaders) => {
      console.log("getPrices.onHeaders", headers);
    },
    onMessage: (pricesResponse: PricesResponse) => {
      console.log("getPrices.onMessage", pricesResponse.toObject());
      drawChart(pricesResponse);
    },
    onEnd: (code: grpc.Code, msg: string, trailers: BrowserHeaders) => {
      console.log("getPrices.onEnd", code, msg, trailers);
    }
  });
}

let simpleChart = echarts.init(document.getElementById('main') as HTMLDivElement);
function resize() {
  simpleChart.resize();
}
window.onresize = resize;

getPrices();

function drawChart(pricesResponse: PricesResponse) {
  let chartOptions = createChartOptions(pricesResponse);
  if (chartOptions == undefined)
  {
    return;
  }
  simpleChart.setOption(chartOptions);
}

function createChartOptions(pricesResponse: PricesResponse): echarts.EChartOption | undefined {
  let chartData = createChartData(pricesResponse.getPriceEntriesList())

  let options: echarts.EChartOption = {
    title: {
        text: 'Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['Rand']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: chartData.formattedDates,
        scale: true,
        boundaryGap : false,
        axisLine: {onZero: false},
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
            end: 100
        }
    ],
    series: [
        {
            name: 'Rand',
            type: 'candlestick',
            data: chartData.prices,
            itemStyle: 
            {
              normal: {
                color: '#21cc24',
                borderColor: '#00000000',
                color0: '#cc2121',
                borderColor0: '#00000000',
              }
            },
            hoverAnimation: true
        }
    ],
    animation: true,
    animationDurationUpdate: 150,
    animationDuration: 500
  };

  return options;
}

class ChartData {
  formattedDates: string[];
  prices: number[][];

  constructor() {
    this.formattedDates = [];
    this.prices = [];
  }
}

function createChartData(priceEntries: PriceEntry[]): ChartData {
  let chartData = new ChartData();
  for (let i = 0; i < priceEntries.length; i++) {
    chartData.formattedDates.push(new Date(priceEntries[i].getUnixTimestamp() * 1000).toDateString())
    chartData.prices.push(createPriceArray(priceEntries[i]));
  }

  return chartData;
}

// Creates an array from the PriceEntry in the following order:
// [open, close, low, high]
function createPriceArray(priceEntry: PriceEntry) : number[] {
  let packedPrices: number[] = [];
  packedPrices.push(priceEntry.getOpen());
  packedPrices.push(priceEntry.getClose());
  packedPrices.push(priceEntry.getLow());
  packedPrices.push(priceEntry.getHigh());
  return packedPrices;
}