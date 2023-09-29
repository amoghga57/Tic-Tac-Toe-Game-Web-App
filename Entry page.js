let val1="",val2="";
function reset() 
{
    document.getElementById("play1").value=""
    document.getElementById("play2").value=""
    document.getElementById("p1xo").value=""
    document.getElementById("p2xo").value=""
    document.getElementById("series").value=""
}
function check1()
{
    if(document.getElementById("p1xo").value=="X")
    {
        val1="X";
        val2="O"
        document.getElementById("p2xo").value="O";
    }
    else
    {
        val1="O";
        val2="X"
        document.getElementById("p2xo").value="X";
    }
}
function check2()
{
    if(document.getElementById("p2xo").value=="X")
    {
        val1="O"
        val2="X";
        document.getElementById("p1xo").value="O";
    }
    else
    {
        val1="X"
        val2="O";
        document.getElementById("p1xo").value="X";
    }
}


function run() {
    const pn1 = document.getElementById("play1").value
    localStorage.setItem("pn1", pn1)
    const pn2 = document.getElementById("play2").value
    localStorage.setItem("pn2",pn2)
    const choose1 = document.getElementById("p1xo").value
    localStorage.setItem("choose1",choose1)
    const choose2 = document.getElementById("p2xo").value
    localStorage.setItem("choose2",choose2)
    const counter=document.getElementById("series").value;
    localStorage.setItem("counter",counter)

    window.location.href = "E:\DOCUMENT\CODES\Front End\HTML,CSS,JavaScript\Project\JavaScript\2.Tic-Tak\2.game page\Tic-Tak.html";
}

