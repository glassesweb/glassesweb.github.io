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

    // �� moveToIndex ���޸�Ӧ�������������߽�������
							function moveToIndex(index) {
									// ��Ҫ��ת������������ͼƬ�б�ʵ�ʳ���ʱ
									// index = 7 ��ĩβ�ĵ�һ��ͼƬ��������Ҫ�޷���ת�������ĵ�һ�ţ�index = 1��
									if (index > spans.length) {
											list.style.transition = ''; // ȥ������Ч����ʵ���޷���ת
											list.style.left = '0px'; // ���õ���һ��ͼƬ��λ��
											index = 1; // ��������
											// ʹ�� setTimeout ��Ϊ���������������Ⱦ�޹��ɵ�״̬�仯��Ȼ�������ӹ���Ч��
											setTimeout(() => {
													list.style.transition = 'left 1s';
													list.style.left = '-1280px'; // �ƶ����ڶ���ͼƬ��λ�ã����ǵ�һ��ͼƬ����Ϊ��һ��ͼƬ�и��������
											}, 0);
									}
									// ��Ҫ��ת��������С��ʵ��ͼƬ����ʱ
									// index = 0 �ǿ�ʼ�����һ��ͼƬ��������Ҫ�޷���ת�����������һ�ţ�index = spans.length��
									else if (index < 1) {
											list.style.transition = ''; // ȥ������Ч����ʵ���޷���ת
											list.style.left = `-${1280 * spans.length}px`; // ���õ����һ��ͼƬ��λ��
											index = spans.length; // ��������
											setTimeout(() => {
													list.style.transition = 'left 1s';
													list.style.left = `-${1280 * (spans.length - 1)}px`; // �ƶ��������ڶ���ͼƬ��λ�ã��������һ��ͼƬ����Ϊ���һ��ͼƬ�и����ڿ�ʼ��
											}, 0);
									} else {
											list.style.left = -1280 * index + 'px'; // ��������µĹ���
									}
									spanIndex = index; // ���µ�������
									updateNav();
							}

							// ע�⣺����Ҫ����ͼƬ�б�����ǰ�������������һ��ͼƬ������
							// ���磬�������5��ͼ��˳��Ӧ����5,1,2,3,4,5,1��5��1��Ϊǰ��ĸ�����

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
