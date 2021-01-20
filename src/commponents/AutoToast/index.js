import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Toast from './toast'
import './style.css'

export default function (opts){
  
    let div=document.createElement('div'),duration=opts.duration||2000;
    document.body.appendChild(div);

    let toastInit=ReactDom.render(<Toast/>,div);
    console.log(toastInit);
    toastInit.setOpts(opts);

    setTimeout(()=>{
        div.querySelector('.my_autotoast').style.animation='hideToast 0.3s forwards';
        setTimeout(()=> {document.body.removeChild(div)},1000);       
        if(opts.onClose  && typeof opts.onClose==='function'){
            opts.onClose('结束啦');
        }
    },duration)
}
