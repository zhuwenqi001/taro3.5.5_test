import { Component, PropsWithChildren, useEffect } from 'react';

import Taro, { useDidShow } from "@tarojs/taro";

import './app.less'

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

    componentDidShow() {
        Taro.onAppShow((res) => {
            console.log(1);
            console.log(res);
          });

    }
    

    componentDidHide() { }


    

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

// function App(props) {

//   Taro.onAppShow((res) => {
//     console.log(1);
//     console.log(res);
//   });

//   useDidShow(() => { 
//     console.log(2)
//   })

//   useEffect(() => {
//     console.log(3)
//   }, [])

//   return props.children;
// }

export default App
