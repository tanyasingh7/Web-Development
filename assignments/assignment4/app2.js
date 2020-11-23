var obj = document.getElementById("button");
obj.addEventListener("click", myFunction);

function myFunction() {

    var node = document.createElement("li");
    var textnode = document.createTextNode("About");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);


    var node2 = document.createElement("li");
	var textnode2 = document.createTextNode("Contact");
	node2.appendChild(textnode2);

     document.getElementById("myList").appendChild(node2);

var listItems = document.querySelectorAll('li');
var i;
for (i = 1; i < listItems.length; i++) {
  listItems[i].className = 'cool';
  listItems[0].className = 'cool';   


}

}
