var mylist = document.getElementsByTagName("li");
for (var i = 0; i < mylist.length; i++) {
    var div = document.createElement("div");
    var txt = document.createTextNode("Close");
    div.className = "close";
    div.appendChild(txt);
    mylist[i].appendChild(div);
} //creating close for each todo


var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
} //hiding done todos


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false); //done list elements


function newList() {
    var li = document.createElement("li");
    var input = document.getElementById("myInput").value;
    var text = document.createTextNode(input);
    li.appendChild(text);
    if (input === '') {
        alert("Write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    } //add new todo 

    document.getElementById("myInput").value = ""; //input becomes empty

    var div = document.createElement("div");
    var txt = document.createTextNode("Close");
    div.className = "close";
    div.appendChild(txt);
    li.appendChild(div);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    } // add close to new todo and hide it

}