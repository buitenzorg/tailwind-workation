import React from 'react';
import App, { AppProps } from 'next/app';
import '../css/styles.css';

export default class TailwindApp extends App {
  render() {
    const { Component, pageProps }:AppProps = this.props;
    return <Component {...pageProps} />;
  }
}
