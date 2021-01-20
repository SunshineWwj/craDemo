import React from 'react';
import ReactDOM from 'react-dom'
import Header from './commponents/header'
import AutoToast from './commponents/AutoToast'
import Confirm from './commponents/Confirm'
import './app.css'

class App extends React.Component{

  constructor(){
    super();
    this.state={
      bShow:true
    }
  }

  componentDidMount(){
      // console.log(document.getElementById('goods'));
      // console.log(this.refs.goods2.innerHTML);//同原生js获取dom一致

      // console.log(this.refs.header)
      // console.log(document.getElementById('header'));

      //查找虚拟dom
      // let header=ReactDOM.findDOMNode(document.getElementById('header'));
      // console.log(header.innerHTML) 

  }
  showToast=()=>{
    AutoToast({
      text:'哈哈哈',
      duration:2000,
      onClose:(text)=>{
        console.log(text)
      }
    });
  }

  onClickDel=()=>{
    Confirm('确认要删除吗？',[
      {
        text:'取消',
        onPress:()=>{console.log('点击取消')}
      },
      {
        text:'确认',
        onPress:()=>{console.log('点击确认')}
      },
      {
        text:'哈哈',
        onPress:()=>{console.log('hahahah')}
      }
    ])
  }

  render(){
    let content='<span style="color:#ff0000">商品详情</span>'
    return(
      <div className="App">
        {/* <Header/>
        <div dangerouslySetInnerHTML={{__html:content}}></div>
        <div id='goods'>潮流女装</div>
        <div ref='goods2'>潮流女装2</div> */}
        <button onClick={this.showToast}>Toast提示</button>

        <button onClick={this.onClickDel}>删除</button>
      </div>
    )
  }
}
export default App;
