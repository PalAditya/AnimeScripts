/*var text = document.body.innerText;
var replaced = text.replace(/Naruto/gi,"Boruto's dad");
//var check = document.createElement('div');
//div.innerHTML = replaced;
document.body.innerHTML += replaced;*/

/*var all = document.getElementsByTagName("body *");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
*/

function walkDOM(main) {
    var arr = [];
    var loop = function(main) {
        do {
            arr.push(main);
            if(main.hasChildNodes())
                loop(main.firstChild);
        }
        while (main = main.nextSibling);
    }
    loop(main);
    return arr;
}

var arr = walkDOM(document.body);
for(var i=0; i<arr.length; i++)
{
	//console.log(arr[i].innerText);
	var text = arr[i].innerHTML;
	var replaced = text.replace(/Naruto/gi,"Boruto's dad");
	arr[i].innerHTML = replaced;
}