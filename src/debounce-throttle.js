function debounce (fn,delay=200){
    let timer = null;
    return function(){
        let context = this,
        args = arguments
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}
function throttle (fn,delay=1000){
    let timer = null 
    return function(){
        let context = this,
        args = arguments
        if(timer) return;
        timer = setTimeout(()=>{
            fn.apply(context,args)
            timer = null
        },delay)
    }
}
export {
    debounce,throttle
}