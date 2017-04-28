import * as React from "react";
import * as ReactDOM from "react-dom";

import { Chart } from "./components/Chart"

ReactDOM.render(
    <Chart url="http://localhost:9090" />,
    document.getElementById("example")
);