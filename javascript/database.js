/**
 * Jsonファイルを読み込む
 * @param {*} _FileName 読み込むJsonファイル名を渡す
 */
function setupDataBase(_FileName) {
	// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
	let req = new XMLHttpRequest();
	req.open("get", "./database/" + _FileName, true);
	req.send(null);

	// 読み込みが完了した時
	req.onload = function () {
		onLoadedJsonDataBase(req.responseText);
	}
}

/**
 * 読み込んだJsonデータを二次元配列に変換する
 * @param {*} _Str 読み込んだJsonデータが文字列として渡される
 */
function onLoadedJsonDataBase(_Str) {
	// 最終的な二次元配列を入れるための配列
	let result = [];

	// 改行を区切り文字として行を要素とした配列を生成
	let tmp = _Str.split("\n");

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

		Console.WriteLine(result[i][0]);
		Console.WriteLine(result[i][1]);
		Console.WriteLine(result[i][2]);
		Console.WriteLine(result[i][3]);

		// 画像の作成
		img.src = "./img/" + result[i][0];
		div.appendChild(img);

		// 名称の作成
		h2.textContent = result[i][1];
		div.appendChild(h2);

		// 説明の作成
		p.textContent = result[i][2];
		div.appendChild(p);
	}
	// すべての設定が完了したら見えているパネルの表示
	showElementAnimation();
}
