/**
 * ロード画面の更新関数
 */
function update() {
	let loading = document.getElementById("loading");
	loading.style.opacity -= 0.1;
	if (loading.style.opacity <= 0.0) {
		loading.style.opacity = 0.0;
		loading.style.display = "none";
	}
}

/**
 * 読み込みが完了した時
 */
function onLoadedScreen() {
	// 指定した要素の取得
	let loading = document.getElementById("loading");
	let contents = document.getElementById("contents");


	// 初期化
	loading.style.opacity = 1.0;
	contents.style.display = "block";

	// 更新関数の設定
	import("./updateManager.js").then((module) => {
		module.update(update, 10);
	});
}

// 読み込みが完了した時
window.addEventListener("load", onLoadedScreen);