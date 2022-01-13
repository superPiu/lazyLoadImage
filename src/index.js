//import {debounce} from 'debounce-and-throttle'
import {lazyLoadImageFn} from 'super-lazy-load-image'

lazyLoadImageFn(50)
const scrollFn = function(){
    lazyLoadImageFn(50,scrollFn)
}
window.addEventListener('scroll',scrollFn)
