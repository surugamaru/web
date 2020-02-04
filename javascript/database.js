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
		onLoadedJsonDataBase(JSON.parse(req.responseText));
	}
}

/**
 * 読み込んだJsonデータを二次元配列に変換する
 * @param {*} _jsonData 読み込んだJsonデータが文字列として渡される
 */
function onLoadedJsonDataBase(_jsonData) {
	for (let i = 0; i < _jsonData.length - 1; ++i) {
		// 追加する要素の作成
		let div = document.createElement("div");
		let img = document.createElement("img");
		let h2 = document.createElement("h2");
		let p = document.createElement("p");

		// ブロックの作成
		div.classList.add("crossPanel");
		div.classList.add("js-animation");
		target.appendChild(div);

		console.log(_jsonData[i].Stock);
		console.log(_jsonData[i].Name);
		console.log(_jsonData[i].Price);
		console.log(_jsonData[i].Path);

		// 画像の作成
		img.src = "./img/" + _jsonData[i].Path;
		div.appendChild(img);

		// 名称の作成
		h2.textContent = _jsonData[i].Name;
		div.appendChild(h2);

		// 説明の作成
		p.textContent = _jsonData[i].Price.toString();
		div.appendChild(p);
	}
	// すべての設定が完了したら見えているパネルの表示
	showElementAnimation();
}
