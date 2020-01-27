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
	var text = arr[i].innerHTML;
	var replaced = text.replace(/Naruto/gi,"Boruto's dad");
	arr[i].innerHTML = replaced;
}