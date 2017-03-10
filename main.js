var check01 = document.getElementById("outerCircle01");
var check02 = document.getElementById("outerCircle02");
var check03 = document.getElementById("outerCircle03");

var count = 0;

check01.addEventListener("click", toggle);
check02.addEventListener("click", toggle);
check03.addEventListener("click", toggle);

function toggle () {
    var checkId = this.attributes["data-circle"].value;
    var todoId = this.attributes["data-todo"].value;
    var checked = document.getElementById(checkId);
    var todoCheck = document.getElementById(todoId);
    if (checked.className === "hide"){
        todoCheck.className = "todo01checked";
        checked.className = "check01";
        count++;
    }else {
        checked.className = "hide";
        todoCheck.className = "todo01unchecked";
        count--;
    }
}

