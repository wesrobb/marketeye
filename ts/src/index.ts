import { grpc, BrowserHeaders } from "grpc-web-client";
import { Prices } from "./prices_pb_service";
import { PricesRequest, PricesResponse } from "./prices_pb";
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

getPrices();
let simpleChart = echarts.init(document.getElementById('main') as HTMLDivElement);

function drawChart(pricesResponse: PricesResponse) {
  let chartOptions = createChartOptions(pricesResponse);
  if (chartOptions == undefined)
  {
    return;
  }
  simpleChart.setOption(chartOptions);
}

function createChartOptions(pricesResponse: PricesResponse): echarts.EChartOption | undefined {
  let priceEntries = pricesResponse.getPriceEntries();
  if (priceEntries == null)
  {
    return undefined;
  }

  let categoryData = priceEntries.getUnixTimestampList()
  let rawPriceData = priceEntries.getValueList()
  let priceData = parseRawPriceData(rawPriceData);

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
        data: categoryData,
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
            data: priceData,
        }
    ]
  };

  return options;
}

function parseRawPriceData(rawPriceData: number[]): number[][] {
  let priceData: number[][] = [];
  for (let i = 0; i < rawPriceData.length / 4; i++) {
    priceData[i] = []
    for (let j = 0; j < 4; j++) {
      priceData[i][j] = rawPriceData[i*4+j];
    }
  }

  return priceData;
}
