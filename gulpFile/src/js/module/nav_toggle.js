/**
 * SP用ナビゲーションを展開する
 * @constructor
 */

export class navToggle {
    constructor() {
        let t = this;

        t.trigger = '.js-trigger';
        t.targetNav = '.js-targetNav';
        t.targetBack = '.js-back';
        t.trigerFlg = false;
    }

    init() {
    	let t = this;

    	// $(t.trigger).on('click', function() {
    	// 	t.showBg();
    	// 	t.showNav();
    	// });

    	$(t.targetBack + ',' + t.targetNav).on('click', function() {

            console.log(t.trig);

            if(t.trigerFlg){
                console.log('hide');
        		t.hideBg();
        		t.hideNav();
                t.trigerFlg = false;
            } else {
                console.log('show');
                t.showBg();
                t.showNav();
                t.trigerFlg = true;
            }
    	});
    }

    /**
     * 背景の半透明黒背景を表示
     */

    showBg() {
        let t = this;

        $(t.targetBack).velocity('stop').velocity({
            properties: {
                opacity: [1]
            },
            options: {
                duration: 300,
                display: 'block'
            }
        });

        console.log('showBg');
    }
    /**
     * 背景の半透明黒背景を非表示
     */

    hideBg() {
     	let t = this;

     	$(t.targetBack).velocity('stop').velocity('reverse', {
            duration: 300,
            display: 'none'
        });

        console.log('close');
    }

    /**
     * ナビゲーションを表示
     */
    showNav() {
    	let t = this;
        console.log(t.targetNav);

    	$(t.targetNav).addClass('active');
        $(t.targetNav).velocity('stop').velocity({
          translateY: '0%'
        }, {
          easing: [1000, 20],
          duration: 300
        });

        $(t.trigger).addClass('open');

        console.log('addComp');
    }


    /**
     * ナビゲーションを非表示
     */
    hideNav() {
    	let t = this;

    	$(t.targetNav).removeClass('active');
        $(t.targetNav).velocity('stop').velocity({
            translateY: '-77%'
        }, {
          easing: [1000, 20],
          duration: 300
        });

        $(t.trigger).removeClass('open');
    }
};

