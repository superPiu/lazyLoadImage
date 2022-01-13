//import {debounce} from 'debounce-and-throttle'
import {lazyLoadImageFn} from 'super-lazy-load-image'

lazyLoadImageFn(50,'./loading.gif')
const scrollFn = function(){
    lazyLoadImageFn(50,'./loading.gif',scrollFn)
}
window.addEventListener('scroll',scrollFn)
