import React from "react";
import Router from "next/router";
import { AppProps } from "next/app";
import Head from "next/head";
import NProgress from "nprogress";

import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

// order is important
import "tailwindcss/tailwind.css";
import "../src/styles/global.css";
import "../src/styles/style.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// if(typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
//   const ReactDOM = require('react-dom');
//   const axe = require('@axe-core/react');
//   axe(React, ReactDOM, 1000);
// }

function TailorWise({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default TailorWise;
