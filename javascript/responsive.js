/**
 * デバイス情報の取得
 */
function getDevice() {
	// デバイス情報の取得
	let ua = navigator.userAgent;

	// 指定した要素が存在する時はSPを返す
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		return 'sp';
	}
	// 指定した要素が存在する時はtabを返す
	else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		return 'tab';
	}
	// それ以外
	else {
		return 'other';
	}
}

/**
 * デバイス毎に読み込むCSSを選択する
 */
function responsive() {
	// 要素を作成
	let styleSheet = document.createElement("link");

	// 要素の設定
	styleSheet.rel = "stylesheet";
	styleSheet.type = "text/css";

	// デバイス別に読み込むCSSの設定
	if (getDevice() === 'sp') {
		styleSheet.href = "./css/layout.sp.css";
	}
	else {
		styleSheet.href = "./css/layout.pc.css";
	}
	// CSSデータを追加
	document.getElementsByTagName("head")[0].appendChild(styleSheet);
}
// デバイス別にCSSを読み込み
responsive();
