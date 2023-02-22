 function SaveUser(nam)
{
    nam = document.getElementById("name").value;
    localStorage.setItem("name", nam);
    window.location="Hyper-Text Markup Language2.html";
    console.log("good")
}
function GetUser()
{
    person = localStorage.getItem("name");
    document.getElementById("Write Here").innerHTML="<h1>Your name is "+person+"</h1>";
    document.getElementById("Button Here").innerHTML="<button onclick='NextPage()'>Next Page</button>"
}
function NextPage()
{
    window.location="Hyper-Text Markup Language3.html";
}
function GetLinks()
{
    document.getElementById("Write Here").innerHTML=" <a href='https://scratch.mit.edu/projects/808234307/fullscreen/' target='_blank'>Robby's Fantastic Ending</a>"
}