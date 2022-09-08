import { Component, PropsWithChildren, useEffect } from 'react';

import Taro, { useDidShow, useLaunch } from "@tarojs/taro";

import './app.less'

// class App extends Component{

//   componentDidMount() {
//     console.log('app componentDidMount')
//     Taro.onAppShow((res) => {
//       console.log(1);
//       console.log(res);
//     });
//   }


//   componentDidShow() {
//       console.log('app componentDidShow')
//   }

//   onLaunch() {
//     console.log('onLaunch')
//    }
    

//     componentDidHide() { }


    

//   render () {
//     // this.props.children 是将要会渲染的页面
//     return this.props.children
//   }
// }

function App(props) {

  Taro.onAppShow((res) => {
    console.log('app onAppShow');
    console.log(res);
  });

  useLaunch((res) => { 
    console.log(res)
  })

  useDidShow(() => { 
    console.log('app useDidShow')
  })

  useEffect(() => {
    console.log('app useEffect')
  }, [])

  return props.children;
}

export default App
