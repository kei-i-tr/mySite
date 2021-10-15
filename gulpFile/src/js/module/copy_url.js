import ClipboardJS from '../plugin/clipboard.min';

/**
 * ターゲット要素押下でdata属性に指定された文言をクリップボードに保存する
 * @param {String} target
 * @constructor
 */
export function copyUrlAction(target) {
    let clipboard = new ClipboardJS(target);
    let alertComment = 'URLをコピーしました';

    clipboard.on('success', function() {
        alert(alertComment);
    });
};
