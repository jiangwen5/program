var swiper = (function(){
	var timer=null;
    return {
        init: function(ele) {
            if(typeof ele == 'string') {
                ele = document.querySelector(ele);
            }
            this.$ele = ele;
            this.$tipBox = ele.querySelector('.banner-tip');
            this.$tipLiAll = this.$tipBox.children;
            this.$preBtn = ele.querySelector('.left-btn');
            this.$nextBtn = ele.querySelector('.right-btn');
            this.$bannerBox = ele.querySelector('.banner-image');
            this.$bannerLiAll = this.$bannerBox.children;
            var first = this.$bannerLiAll[0];
            var last =  this.$bannerBox.lastElementChild;
            this.$bannerBox.appendChild(first.cloneNode(true));
            this.$bannerBox.insertBefore(last.cloneNode(true), first);
            this.$bannerBox.style.left = '-830px';
            for(var i = 0; i <  this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].index = i;
            }
            this.index = 0;
            this.event();
            this.autoPlay()
        },
        event: function() {
            var _this = this;
            this.$tipBox.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'LI') {

                    _this.showImage(target.index);
                    _this.autoPlay(target.index);
                }
            };
            this.$preBtn.onclick =function() {
                _this.showImage(--_this.index);
            }
            this.$nextBtn.onclick = function() {
               _this.showImage(++_this.index);           
            }
        },
        showImage: function(index) {
            var maxIndex = this.$tipLiAll.length - 1;
            if(index > maxIndex) {
                index = 0;
                this.$bannerBox.style.left = 0;
            } else if(index < 0) {
                index = maxIndex;
                this.$bannerBox.style.left = -830 * (maxIndex + 2) + 'px';
            }
            this.index = index;
            for(var i = 0; i < this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].removeAttribute('class');
            }
            this.$tipLiAll[index].className = 'active';
            move(this.$bannerBox, 'left', -830 * (index + 1));
        },
        autoPlay(index) {
        	clearInterval(timer);
            index = index || 0;
            var _this=this;
           timer=setInterval(function(){
            	_this.index++;
                _this.showImage(_this.index);
            }, 3000)
        }
    }
}())
 var _scroll = (function(){
           var $up = document.querySelector('.up');
           console.log(1);
           return {
               init: function() {
                   this.event()
               },
               event: function() {
                   $up.onclick = function() {
                   	
                       var time = setInterval(function() {
                           var _top = document.documentElement.scrollTop - 20;
                           if(_top <= 0) {
                              _top = 0;
                              clearInterval(time);
                           }
                           document.documentElement.scrollTop =  _top;
                       }, 5);
                   }
               }
           }
       }())
       _scroll.init();
 window.onload = function(){
            var time = {
                init: function() {
                    var oTime=document.getElementById("time");
                    var h='0' + 1;
                    var m=59;
                    var s=59;
                    oTime.innerHTML="02 : 00 : 00";
 
                    //进行倒计时显示
                    var time = setInterval(function(){
                        --s;
                        if(s<0){
                            --m;
                            s=59;
                        }
                        if(m<0){
                            --h;
                            m=59
                        }
                        if(h<0){
                            s=0;
                            m=0;
                        }
                    // 判断当时分秒小于10时补0
                        function checkTime(i){
                            if (i < 10) {
                                i = '0' + i
                            }
                            return i;
                        }
                        s = checkTime(s);
                        m = checkTime(m);
                        oTime.innerHTML=h+" : "+m+" : "+s;
                    },1000);
                }
            }
            time.init();
        }