function validate1(){
    var logname=document.getElementById('txtname').value;

    if(logname==null||logname=="")
    {
        alert("Name is required")
        return false
    }
    else{
        return true
    }
}

function validate2(){
    var logemail=document.getElementById('txtlogemail').value;

    if(logemail==null||logemail=="")
    {
        alert("Email is required")
        return false;
    }
    else{
        return true;
    }
}

function validate3(){
    var logpassword=document.getElementById('paslogpassword').value;

    if(logpassword==null ||logpassword=="")
    {
        alert("Password is required");
        return false
    }
    else{
        return true;
    }
}

function validate4(){
    var llogname=document.getElementById('txtname').value;
    var llogemail=document.getElementById('txtlogemail').value;
    var llogpassword=document.getElementById('paslogpassword').value;

    if(llogemail==""||llogemail==null||llogname==""||llogname==null||llogpassword==null||llogpassword=="")
    {
        alert("All fields need to be entered")
        return false
    }
    else{
        return true
    }
}

function validate5(){
    var logfullname=document.getElementById('txtname').value;

    document.getElementById('txtwelcome').innerHTML="Welcome "+logfullname+""
}