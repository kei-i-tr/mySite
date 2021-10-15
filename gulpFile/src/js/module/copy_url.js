import ClipboardJS from '../plugin/clipboard.min';

/**
 * ターゲット要素押下でdata属性に指定された文言をクリップボードに保存する
 * @param {String} target
 * @constructor
 */
export function copyUrlAction(target) {
    let clipboard = new ClipboardJS(target);
    let alertComment = 'URLをコピーしました';
    let notification = document.getElementById("notification");

    clipboard.on('success', function() {
		showNotification();
		e.clearSelection();
    });

	function showNotification() {
	  notification.classList.add("active");
	  setTimeout(() => {
	    notification.classList.remove("active");
	  }, 1500);
}
};
