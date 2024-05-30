window.onload = function() {
    var carousel = document.getElementById('carousel');
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var list = document.getElementById('list');
    var spans = document.getElementById('slider_nav').getElementsByTagName('span');
    var spanIndex = 1;
    var time;

    function updateNav() {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        spans[spanIndex - 1].className = 'active';
    }

    // 对 moveToIndex 的修改应包括处理超出边界的情况：
							function moveToIndex(index) {
									// 当要跳转到的索引超出图片列表实际长度时
									// index = 7 是末尾的第一个图片副本，需要无缝跳转到真正的第一张（index = 1）
									if (index > spans.length) {
											list.style.transition = ''; // 去除过渡效果以实现无缝跳转
											list.style.left = '0px'; // 重置到第一张图片的位置
											index = 1; // 重置索引
											// 使用 setTimeout 是为了允许浏览器先渲染无过渡的状态变化，然后再添加过渡效果
											setTimeout(() => {
													list.style.transition = 'left 1s';
													list.style.left = '-1280px'; // 移动到第二张图片的位置（正是第一张图片，因为第一张图片有副本在最后）
											}, 0);
									}
									// 当要跳转到的索引小于实际图片数量时
									// index = 0 是开始的最后一个图片副本，需要无缝跳转到真正的最后一张（index = spans.length）
									else if (index < 1) {
											list.style.transition = ''; // 去除过渡效果以实现无缝跳转
											list.style.left = `-${1280 * spans.length}px`; // 重置到最后一张图片的位置
											index = spans.length; // 重置索引
											setTimeout(() => {
													list.style.transition = 'left 1s';
													list.style.left = `-${1280 * (spans.length - 1)}px`; // 移动到倒数第二张图片的位置（正是最后一张图片，因为最后一张图片有副本在开始）
											}, 0);
									} else {
											list.style.left = -1280 * index + 'px'; // 正常情况下的过渡
									}
									spanIndex = index; // 更新导航索引
									updateNav();
							}

							// 注意：这需要您的图片列表在最前面和最后面各增加一个图片副本。
							// 例如，如果您有5张图像，顺序应该是5,1,2,3,4,5,1（5和1各为前后的副本）

    next.onpointerdown = function() {
        if (parseInt(list.style.left) < -4800) {
            list.style.transition = '';
            list.style.left = '-1280px';
        }
        setTimeout(function() {
            moveToIndex(spanIndex + 1);
        }, 0);
    };

    prev.onpointerdown = function() {
        if (parseInt(list.style.left) > -1280) {
            list.style.transition = '';
            list.style.left = '-1280px';
        }
        setTimeout(function() {
            moveToIndex(spanIndex - 1);
        }, 0);
    };

    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i + 1;
        spans[i].onclick = function() {
            moveToIndex(this.index);
        };
    }

    function play() {
        time = setInterval(function() {
            next.onpointerdown();
        }, 3000);
    }

    play();

    carousel.onmouseover = function() {
        clearInterval(time);
    };

    carousel.onmouseout = function() {
        play();
    };
}
