/**
 * Jsonファイルを読み込む
 * @param {*} _fileName 読み込むJsonファイル名を渡す
 */
function setupDataBase(_fileName) {
	// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
	let req = new XMLHttpRequest();
	req.open("get", "./database/" + _fileName, true);
	req.send();

	// 読み込みが完了した時
	req.onload = function () {
		onLoadedJsonDataBase(req.responseText);
	}
}

/**
 * 読み込んだJsonデータを二次元配列に変換する
 * @param {*} _jsonData 読み込んだJsonデータが文字列として渡される
 */
function onLoadedJsonDataBase(_jsonData) {

	var test = JSON.parse(_jsonData);
	// 最終的な二次元配列を入れるための配列
	let result = [];

	// 改行を区切り文字として行を要素とした配列を生成
	let tmp = _jsonData.split("\n");

	// 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
	for (let i = 0; i < tmp.length; ++i) {
		result[i] = tmp[i].split(',');
	}
	// 指定した要素の取得
	let target = document.getElementById("database");

	for (let i = 0; i < result.length - 1; ++i) {
		// 追加する要素の作成
		let div = document.createElement("div");
		let img = document.createElement("img");
		let h2 = document.createElement("h2");
		let p = document.createElement("p");

		// ブロックの作成
		div.classList.add("crossPanel");
		div.classList.add("js-animation");
		target.appendChild(div);

		console.log(_jsonData.Stock);
		console.log(_jsonData.Name);
		console.log(_jsonData.Price);
		console.log(_jsonData.Path);

		// 画像の作成
		img.src = "./img/" + _jsonData.Path;
		div.appendChild(img);

		// 名称の作成
		h2.textContent = _jsonData.Name;
		div.appendChild(h2);

		// 説明の作成
		p.textContent = _jsonData.Price;
		div.appendChild(p);
	}
	// すべての設定が完了したら見えているパネルの表示
	showElementAnimation();
}
