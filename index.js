var smit = document.getElementById("submit");
smit.addEventListener("click",formvalidate,false); 


function formvalidate(){

    console.log(" vua moi click submit");

    if(t==null){
        var t= document.forms["myForm"]["fname"].value;
        if(t==null || t==""){
             alert("xin dien vao email");

        }
    }

}