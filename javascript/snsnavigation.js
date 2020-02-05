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
	a.classList.add("js-animation");
	a.href = "https://twitter.com/_surugamaru_";
	div.appendChild(a);
	// Twitter 画像の作成
	let Image = document.createElement("image");
	Image.src = "./Image/SNS/Twitter.png";
	Image.alt = "Twitter"
	Image.style.padding = "5px";
	a.appendChild(Image)

	// FaceBook リンクの作成
	a = document.createElement("a");
	a.classList.add("js-animation");
	a.href = "https://facebook.com/surugamaru";
	div.appendChild(a);
	// FaceBook 画像の作成
	Image = document.createElement("image");
	Image.src = "./Image/SNS/Facebook.png";
	Image.alt = "FaceBook"
	Image.style.padding = "5px";
	a.appendChild(Image)

	// Instagram リンクの作成
	a = document.createElement("a");
	a.classList.add("js-animation");
	a.href = "https://instagram.com/surugamaru";
	div.appendChild(a);
	// Instagram 画像の作成
	Image = document.createElement("image");
	Image.src = "./Image/SNS/Instagram.png";
	Image.alt = "Instagram"
	Image.style.padding = "5px";
	a.appendChild(Image)
}
// 読み込みが完了した時
window.addEventListener("load", createSNSNavigation);
