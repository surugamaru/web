/**
 * snsナビゲーションを配置
 */
function createSNSNavigation() {
	// 指定した要素の取得
	let target = document.getElementById("footer");

	// 部特区の作成
	let div = document.createElement("div");
	div.classList.add("shareView");
	target.appendChild(div);

	// Twitter リンクの作成
	let a = document.createElement("a");
	a.href = "https://twitter.com/_surugamaru_";
	div.appendChild(a);
	// Twitter 画像の作成
	let img = document.createElement("img");
	img.src = "./Images/SNS/Twitter.png";
	img.alt = "Twitter"
	img.style.padding = "5px";
	a.appendChild(img)

	// FaceBook リンクの作成
	a = document.createElement("a");
	a.href = "https://facebook.com/surugamaru";
	div.appendChild(a);
	// FaceBook 画像の作成
	img = document.createElement("img");
	img.src = "./Images/SNS/Facebook.png";
	img.alt = "FaceBook"
	img.style.padding = "5px";
	a.appendChild(img)

	// Instagram リンクの作成
	a = document.createElement("a");
	a.href = "https://instagram.com/surugamaru";
	div.appendChild(a);
	// Instagram 画像の作成
	img = document.createElement("img");
	img.src = "./Images/SNS/Instagram.png";
	img.alt = "Instagram"
	img.style.padding = "5px";
	a.appendChild(img)
}
// 読み込みが完了した時
window.addEventListener("load", createSNSNavigation);
