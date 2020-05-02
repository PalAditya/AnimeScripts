var arr = {
	"root": [{
			"name": "Asuna_Yuuki.png",
			"img": "https://user-images.githubusercontent.com/25523604/73164675-62278880-4118-11ea-9954-8d3288b9c6ec.png",
			"url": "https://myanimelist.net/anime/11757/Sword_Art_Online"
		},
		{
			"name": "Alice_Zuberg.jpg",
			"img": "https://user-images.githubusercontent.com/25523604/73235418-6e612380-41b4-11ea-82dd-c254c1a4e11b.jpg",
			"url": "https://myanimelist.net/anime/36474/Sword_Art_Online__Alicization"
		},
		{
			"name": "Darkness.png",
			"img": "https://user-images.githubusercontent.com/25523604/73235660-59d15b00-41b5-11ea-9268-f6f526ff46c0.png",
			"url": "https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo"
		},
		{
			"name": "Momo_Yaoyorozu.jpg",
			"img": "https://user-images.githubusercontent.com/25523604/73236274-ba619780-41b7-11ea-9f9d-b0db19643248.jpg",
			"url": "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia"
		},
		{
			"name": "Mafuyu_Kirisu.jpg",
			"img": "https://user-images.githubusercontent.com/25523604/73237311-2396da00-41bb-11ea-9a0e-2f274e61366c.jpg",
			"url": "https://myanimelist.net/anime/38186/Bokutachi_wa_Benkyou_ga_Dekinai"
		}
	]
};
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
if(window.location.href == "https://www.google.com/" || window.location.href == "chrome-search://local-ntp/local-ntp.html")
{
	var index = getRandomInt(0,arr["root"].length-1);
	var waifu = arr["root"][index];
	document.body.style.backgroundImage = "url("+waifu.img+")";
	if(document.getElementsByClassName("FPdoLc tfB0Bf")[0] != undefined)
	{
		var a = document.createElement('input');
		a.classList.add('gNO89b');
		a.setAttribute("value","Go to anime");
		a.setAttribute("name","btnK");
		a.setAttribute("data-ved","077ahUKEwj4-rjD_6PnAhVw8XMBHcZGD8sQ4dUDCAo");
		a.setAttribute("type","submit");
		a.onclick = function() { window.location = waifu.url; }
		var save = document.createElement('input');
		save.classList.add('gNO89b');
		save.setAttribute("value","Save waifu");
		save.setAttribute("name","btnK");
		save.setAttribute("data-ved","077ahUKEwj4-rjD_6PnAhVw8XMBHcZGD8sQ4dUDCAo");
		save.setAttribute("type","submit");
		save.onclick = function() 
		{ 
			window.open("https://phptils.herokuapp.com/download.php?url="+waifu.img+"&name="+waifu.name,"_blank");
		}
		document.getElementsByClassName("FPdoLc tfB0Bf")[0].getElementsByTagName('center')[0].appendChild(a);document.getElementsByClassName("FPdoLc tfB0Bf")[0].getElementsByTagName('center')[0].appendChild(a);
		document.getElementsByClassName("FPdoLc tfB0Bf")[0].getElementsByTagName('center')[0].appendChild(a);document.getElementsByClassName("FPdoLc tfB0Bf")[0].getElementsByTagName('center')[0].appendChild(save);
	}
	if(document.getElementById("SBmmZd") != null )
	{
		var a = document.createElement('a');
		a.innerText = "Go to anime";
		a.setAttribute("href", waifu.url);
		var save = document.createElement('a');
		save.innerText = "Save waifu";
		save.setAttribute("href", "https://phptils.herokuapp.com/download.php?url="+waifu.img+"&name="+waifu.name);
		save.setAttribute("target","_blank");
		document.getElementById("SBmmZd").appendChild(a);
		document.getElementById("SBmmZd").appendChild(save);
	}
}