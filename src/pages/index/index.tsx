import { Component, PropsWithChildren } from "react";
import { View, Text, WebView } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import "./index.less";

export default function Index(props) {
  return (
    <WebView src='https://www.baidu.com' />
  );
}
