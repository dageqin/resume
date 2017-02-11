/**
 * Created by Kathy on 2017/2/11.
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {
        var curIndex = swiper.activeIndex;//当前滑块的索引
        var slides = swiper.slides;//所有的滑块
        //通过活动索引找到对应的滑块，增加相应的ID名
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if (index == curIndex) {
                //当前活动的滑块的索引是否是复制第一个或者是最后一个
                if (index == 0) {
                    item.id = 'page' + (slides.length - 2);
                } else if (index == slides.length - 1) {
                    item.id = 'page1';
                } else {
                    item.id = 'page' + index;
                }
            }
        })
    }
});
var music = document.getElementsByClassName('music')[0];
var summertrain = document.getElementById('summertrain');
var photo=document.getElementById('photo');
window.setTimeout(function () {
    music.style.opacity = 1;
    summertrain.play();
    music.className = 'music musicMove';
}, 1000);
//音乐播放是通过play（）方法 停止是pause（）,判断音频文件是播放还是停止的summertrain.paused =true-停止，false-》播放
music.addEventListener('click', function () {
    if (summertrain.paused) {
        summertrain.play();
        music.className = 'music musicMove';
    } else {
        summertrain.pause();
        music.className = 'music';
    }
});

