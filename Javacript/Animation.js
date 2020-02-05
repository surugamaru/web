/**
 * 到達したら要素を表示させる
 */
function showElementAnimation() {
	// 指定したクラスの要素を取得
	let element = document.getElementsByClassName('js-animation');
	// 要素がなかったら処理をキャンセル
	if (!element) {
		console.error("要素が取得できません。");
		return;
	}
	// 要素が出てくるタイミングを設定
	let showTiming = window.innerHeight > 768 ? 200 : 40;
	let scrollY = window.pageYOffset;
	let windowH = window.innerHeight;

	for (let i = 0; i < element.length; i++) {
		let elemClientRect = element[i].getBoundingClientRect();
		let elemY = scrollY + elemClientRect.top;
		if (scrollY + windowH - showTiming > elemY) {
			element[i].classList.add('is-show');
		}
		else if (scrollY + windowH < elemY) {
			// 上にスクロールされたら再度非表示にする
			element[i].classList.remove('is-show');
		}
	}
}
// 読み込みが完了した時
window.addEventListener('load', showElementAnimation);

// スクロールされた時
window.addEventListener('scroll', showElementAnimation);
