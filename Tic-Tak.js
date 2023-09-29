let count = 0;
// let v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0,v9=0;
let array=[0,0,0,0,0,0,0,0,0]
let val;
let p1 = 1, p2 = 1;
let a, b, c, d, e, f, i;

// ----------------------------------------------------------
//taking the names from previous page and initialing
let try_left = Number(localStorage.getItem("counter"))
document.getElementById("nav").innerHTML = try_left

let player1name = localStorage.getItem("pn1")
document.getElementById("pn1").innerHTML = player1name.toUpperCase()
document.getElementById("pn3").innerHTML = "Chooses " + localStorage.getItem("choose1") + " Symbol"

let player2name = localStorage.getItem("pn2")
document.getElementById("pn2").innerHTML = player2name.toUpperCase()
document.getElementById("pn4").innerHTML = " Chooses " + localStorage.getItem("choose2") + " Symbol"
// ----------------------------------------------------------
//the boxes restarts(undo)
function refresh() {
    for (let i = 1; i <=9; i++) {
        document.getElementById("b"+i+"").innerHTML = "";   
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("resbox").innerHTML = "";
    count = 0;
    for (let j = 1; j <=9; j++) {
        document.getElementById("b"+j+"").style.backgroundColor ="";   
    }
    for(let i=0;i<array.length;i++)
    {
        array[i]=0;
    }
}
// ----------------------------------------------------------
//functionong of the button
function change(ch,v) {
    let compare="b"+v;
    if(ch==compare && array[v-1]==0)//comparing for button ,if clicked once then it enters ,else wont enter
    {
        if (count % 2 == 0) {
            document.getElementById(ch).style.backgroundColor="red"
            val = "X";
            document.getElementById(ch).innerHTML = val;
            count++;
        }
        else {
            document.getElementById(ch).style.backgroundColor="green"
            val = "O"
            document.getElementById(ch).innerHTML = val;
            count++;
        }
        array[v-1]=1;
    }
    //store all the value to the variable
    a = document.getElementById("b1").innerHTML;
    b = document.getElementById("b2").innerHTML;
    c = document.getElementById("b3").innerHTML;
    d = document.getElementById("b4").innerHTML;
    e = document.getElementById("b5").innerHTML;
    f = document.getElementById("b6").innerHTML;
    g = document.getElementById("b7").innerHTML;
    h = document.getElementById("b8").innerHTML;
    i = document.getElementById("b9").innerHTML;
    //checks for any win condition ,every time button is pressed
    if ((a == "X" && b == "X" && c == "X") || (a == "O" && b == "O" && c == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((d == "X" && e == "X" && f == "X") || (d == "O" && e == "O" && f == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((g == "X" && h == "X" && i == "X") || (g == "O" && h == "O" && i == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((a == "X" && d == "X" && g == "X") || (a == "O" && d == "O" && g == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((b == "X" && e == "X" && h == "X") || (b == "O" && e == "O" && h == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((c == "X" && f == "X" && i == "X") || (c == "O" && f == "O" && i == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((a == "X" && e == "X" && i == "X") || (a == "O" && e == "O" && i == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game"
        count = 0;
        restart();
    }
    else if ((c == "X" && e == "X" && g == "X") || (c == "O" && e == "O" && g == "O")) {
        document.getElementById("output").innerHTML = val + " Wins the game";
        count = 0;
        restart();
    }
    if (count == 9) {
        document.getElementById("output").innerHTML = "Match is Draw";
        val = ""
        restart()
        count = 0;
    }
}

//this function is called when the person wins and it puts the point and refreshs the every box value
function restart() {

    for (let i = 1; i <=9; i++) {
        document.getElementById("b"+i+"").innerHTML = "";   
    }
    for (let j = 1; j <=9; j++) {
        document.getElementById("b"+j+"").style.backgroundColor ="";   
    }

    if (localStorage.getItem("choose1") == "X" ) {
        if (val == "X") {
            document.getElementById("point1").innerHTML = p1++;
        }
    }
    if (localStorage.getItem("choose1") == "O" ) {
        if (val == "O") {
            document.getElementById("point1").innerHTML = p1++;
        }
    }
    if (localStorage.getItem("choose2") == "O") {
        if (val == "O") {
            document.getElementById("point2").innerHTML = p2++;
        }
    }
    if (localStorage.getItem("choose2") == "X") {
        if (val == "X") {
            document.getElementById("point2").innerHTML = p2++;
        }
    }
    for(let i=0;i<array.length;i++)
    {
        array[i]=0
    }
    try_left--;
    document.getElementById("nav").innerHTML = try_left
    if (try_left == 0) {
        if (p1 == p2) {
            document.getElementById("resbox").innerHTML = "Both the Player are Draw";
        }
        else if (p1 > p2) {
            document.getElementById("resbox").innerHTML = "✨🎉🎉🎉Player 1 wins the Series🎉🎉🎉✨";
            document.getElementById("winb1").innerHTML = "🎊🎊🎊WINNER🎊🎊🎊";
        }
        else {
            document.getElementById("resbox").innerHTML = "✨🎉🎉🎉Player 2 wins the Series🎉🎉🎉✨";
            document.getElementById("winb2").innerHTML = "🎊🎊🎊WINNER🎊🎊🎊";
        }
        reboot()
    }
    //onces the series is finished all the value the value will be restarted when the restrat button is clicked
    function reboot()
    {
        document.getElementById("outerbox").style.visibility="hidden"
        document.getElementById("hide").style.visibility="visible"
        document.getElementById("perform").onclick=function ()// when the restart button is clicked ,creats new box with empty value 
        {
            document.getElementById("resbox").innerHTML = "";
            document.getElementById("winb1").innerHTML = "";              
            document.getElementById("winb2").innerHTML = "";  
            document.getElementById("point1").innerHTML = "";
            p1=1;p2=1;  
            document.getElementById("point2").innerHTML = "";  
            document.getElementById("output").innerHTML = "";
            try_left = Number(localStorage.getItem("counter"))
            document.getElementById("nav").innerHTML = try_left
            document.getElementById("hide").style.visibility="hidden"
            document.getElementById("outerbox").style.visibility="visible"
        }
        
    }
}

