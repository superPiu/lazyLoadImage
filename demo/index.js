//import {debounce} from 'debounce-and-throttle'
import {lazyLoadImageFn} from 'super-lazy-load-image'

lazyLoadImageFn({preHeight:50})
const scrollFn = function(){
    lazyLoadImageFn({preHeight:50,needUnbindFn:scrollFn})
}
window.addEventListener('scroll',scrollFn)
