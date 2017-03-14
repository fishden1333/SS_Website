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
    if(count == 1){
        document.getElementById('piano_img').src = "./src/piano_icon.png";
        document.getElementById('drum_img').src = "./src/blank_drum_icon.png";
        document.getElementById('guitar_img').src = "./src/blank_guitar_icon.png";
    }
    if(count == 2){
        document.getElementById('drum_img').src = "./src/drum_icon.png";
        document.getElementById('guitar_img').src = "./src/blank_guitar_icon.png";
    }
    if(count == 3){
        document.getElementById('guitar_img').src = "./src/guitar_icon.png";
    }
    if(count == 0){
        document.getElementById('piano_img').src = "./src/blank_piano_icon.png";
        document.getElementById('drum_img').src = "./src/blank_drum_icon.png";
        document.getElementById('guitar_img').src = "./src/blank_guitar_icon.png";
    }
}

var newnode = document.getElementById('nav_experience_design').cloneNode(true);
var oldnode = document.getElementById('nav_about_contact');

window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if( t > 0 ) {
        document.getElementById('nav_experience_design').className = 'experience_and_design_after';
        newnode.className = 'experience_and_design_after_replace';
        document.getElementById("wrapper").replaceChild(newnode, oldnode);
    }
    if( t == 0){
        document.getElementById("wrapper").replaceChild(oldnode, newnode);
        document.getElementById('nav_experience_design').className = 'experience_and_design';
    }
}

var play_count = 1;

function play(){
    if(count == 1 && play_count == 1){
        var audio = document.getElementById("audio");
        audio.src = './src/MIX1.mp3';
        audio.play();
        play_count = 0;
    }
    else if(count == 2 && play_count == 1){
        var audio = document.getElementById("audio");
        audio.src = './src/MIX2.mp3';
        audio.play();
        play_count = 0;
    }
    else if(count == 3 && play_count == 1){
        var audio = document.getElementById("audio");
        audio.src = './src/MIX3.mp3';
        audio.play();
        play_count = 0;
    }
    else{
        this.audio.pause();
        play_count = 1;
    }
}


// jquery

$('#go_to_top').click(function(){
    $(this).click(function(){
        $('html,body').animate({ scrollTop : 0 }, 'slow');
        return false;
    });
});

$('#jump_to_experience').click(function (){
    $(this).click(function (){
        $('html, body').animate({scrollTop: $("#experience_link").offset().top }, 'slow');
        return false;
    });
});

$('#jump_to_design').click(function (){
    $(this).click(function (){
        $('html, body').animate({scrollTop: $("#design_link").offset().top}, 'slow');
        return false;
    });
});