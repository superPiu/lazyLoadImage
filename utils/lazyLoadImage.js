import {debounce} from 'debounce-and-throttle'
 //获取带 lazy-src 属性需要懒加载的图片
 function getLazyLoadImgs(){
    const imgList = Array.from(document.querySelectorAll('img[lazy-src]'))
    return imgList;
}
//设置图片占位
function setPlaceHolder(item){
    item.style.minHeight = "100px"
    item.style.minWidth = "100px"
    const bgUrl = require('./loading.gif')//直接设置背景图url webpack编译的时候不会打包引入图片，需要将图片作为模块，用require引入
    item.style.background = "url("+ bgUrl +") no-repeat center center"
}
function lazyLoadImage(params){
    const defaultOpts = {
        preHeight:50,
        needUnbindFn:null
    }
    const opts = Object.assign(defaultOpts,params)
    const lazyLoadImgs = getLazyLoadImgs()
    if(lazyLoadImgs.length === 0 && opts.needUnbindFn){
        window.removeEventListener('scroll',opts.needUnbindFn) //图片全部加载完成移除事件监听
    }
    lazyLoadImgs.forEach((item,i)=>{
        if(!item.getAttribute('src')){//如果图片未设置src属性则用传入的占位图片做背景
            setPlaceHolder(item)
        }
        const position = item.getBoundingClientRect();
        if(position.top < window.innerHeight + opts.preHeight && position.bottom > 0){//判断图片是否在可加载区域
            item.setAttribute('src',item.getAttribute('lazy-src'))
            item.removeAttribute('lazy-src')
        }
        
    })
}
const lazyLoadImageFn  = debounce(lazyLoadImage,500)
export {lazyLoadImageFn}

