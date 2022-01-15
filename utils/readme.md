# 图片懒加载


### 参数设置
#### preHeight
* 类型：Number
* 默认值: 50。预加载的距离


#### needUnbindFn

* 类型：Function
* 图片全部加载完成后需要清除事件绑定的函数

### 安装

```javascript
npm i super-lazy-load-image

```

### 用法示例
HTML
```html
<ul class="imgLoad">
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/1.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/2.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/3.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/4.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/5.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/6.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/7.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/8.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/9.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/10.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/11.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/12.jpg"></li>
	<li><img alt="" lazy-src="http://cdn.jirengu.com/book.jirengu.com/img/13.jpg"></li>
</ul>
```

JS
```javascript
mport {lazyLoadImageFn} from 'super-lazy-load-image'
......
lazyLoadImageFn({preHeight:50})
const scrollFn = function(){
    lazyLoadImageFn({preHeight:50,needUnbindFn:scrollFn})
}
window.addEventListener('scroll',scrollFn)
```
