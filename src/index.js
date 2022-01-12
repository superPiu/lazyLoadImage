import {debounce} from 'debounce-and-throttle'
 //获取带 lazy-src 属性的图片
 function getLazyLoadImgs(){
    const imgList = Array.from(document.getElementsByTagName('img'))
    let lazyLoadImgs = []
    imgList.map(img => {
        if(img.hasAttribute('lazy-src')) lazyLoadImgs.push(img)
    })
    return lazyLoadImgs;
}

function lazyLoadImage(preHeight,placleHolder,eventName){
    const lazyLoadImgs = getLazyLoadImgs()
    if(lazyLoadImgs.length === 0 && eventName){
        window.removeEventListener('scroll',eventName) //图片全部加载完成移除事件监听
    }
    lazyLoadImgs.forEach((item,i)=>{
        if(!item.getAttribute('src') && placleHolder){//如果图片未设置src属性则用传入的占位图片做背景
            item.style.minHeight = "100px"
            item.style.minWidth = "100px"
            item.style.background = "url("+ placleHolder +") no-repeat center center"
        }
        const position = item.getBoundingClientRect();
        if(position.top < window.innerHeight + preHeight && position.bottom > 0){//判断图片是否在可加载区域
            const lazySrc = item.getAttribute('lazy-src')
            item.setAttribute('src',lazySrc)
            item.removeAttribute('lazy-src')
        }
        
    })
}
const lazyLoadImageFn  = debounce(lazyLoadImage,500)
lazyLoadImageFn(50,'./loading.gif')
const scrollFn = function(){
    lazyLoadImageFn(50,'./loading.gif',scrollFn)
}
window.addEventListener('scroll',scrollFn)
