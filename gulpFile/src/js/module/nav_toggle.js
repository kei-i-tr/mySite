/**
 * SP用ナビゲーションを展開する
 * @constructor
 */

export class navToggle {
    constructor() {
        let t = this;

        t.trigger = '.js-trigger';
        t.target = '.js-target';
        t.targetBack = '.js-back';
    }

    init() {
    	let t = this;

    	// $(t.trigger).on('click', function() {
    	// 	t.showBg();
    	// 	t.showNav();
    	// });

    	$(t.trigger + ',' + t.targetBack).on('click', function() {

            if($('active').length){
                console.log('aaa');
        		t.hideBg();
        		t.hideNav();
            } else {
                console.log('bbb');
                t.showBg();
                t.showNav();
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

        console.log('show');
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
    	let t = $(this)
        console.log('add');

    	$(t.target).addClass('active');
    }


    /**
     * ナビゲーションを非表示
     */
    hideNav() {
    	let t = $(this)

    	$(t.target).removeClass('active');
    }
};

