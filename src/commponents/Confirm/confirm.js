import React, { Component } from 'react'
import './style.css'
export default class confirm extends Component {
    state={
        msg:'',
        btns:[]
    }
    setData=(msg,btns,div)=>{
        this.setState({
            msg,
            btns
        })
        this.div=div
    }

    onBtnClick=(index)=>{
        if(this.state.btns[index].onPress && typeof this.state.btns[index].onPress ==='function'){
            this.state.btns[index].onPress();
        }
        document.body.removeChild(this.div);
    }

    render() {
        return (
            <div className='my_confirm_mask'>
                <div className='confirm'>
                    <div className='message'>{this.state.msg}</div>
                    <div className='handle'>
                        {
                            this.state.btns.length>0 && this.state.btns.map((item,index)=>{
                              return  <div className='button' key={index} onClick={()=>this.onBtnClick(index)}>{item.text}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
