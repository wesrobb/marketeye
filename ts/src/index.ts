import {grpc, BrowserHeaders} from "grpc-web-client";
import {Prices} from "./prices_pb_service";
import {PricesRequest, PricesResponse} from "./prices_pb";
import * as echarts from "echarts"

declare const USE_TLS: boolean;
const host = USE_TLS ? "https://localhost:9091" : "http://localhost:9090";

function getPrices() {
  const pricesRequest = new PricesRequest();
  pricesRequest.setShortcode("SHP");
  pricesRequest.setExchange("JSE");
  grpc.invoke(Prices.GetPrices, {
    request: pricesRequest,
    host: host,
    onHeaders: (headers: BrowserHeaders) => {
      console.log("getPrices.onHeaders", headers);
    },
    onMessage: (message: PricesResponse) => {
      console.log("getPrices.onMessage", message.toObject());
    },
    onEnd: (code: grpc.Code, msg: string, trailers: BrowserHeaders) => {
      console.log("getPrices.onEnd", code, msg, trailers);
    }
  });
}

getPrices();

let simpleChart = echarts.init(document.getElementById('main') as HTMLDivElement);

let options: echarts.EChartOption = {
  title: { text: 'ECharts entry example' },
    tooltip: {},
    xAxis: {
        data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
}
simpleChart.setOption(options);