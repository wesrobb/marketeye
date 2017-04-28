import * as React from "react";
import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

export interface ApiEndpoint { 
    url: string; 
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Chart extends React.Component<ApiEndpoint, undefined> {
    render() {
        return <h1>Data from {this.props.url}</h1>;
    }

    componentDidMount() {
        Axios.get(this.props.url).then((response) => {
            console.log(response)
        })
    }
}