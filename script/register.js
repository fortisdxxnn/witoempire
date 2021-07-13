// Use of one user defined Function
function validate1()  
{
    var fname=document.getElementById('txtfname').value;
    var letters=/^[A-Za-z]+$/;
    
    if(fname.match(letters))
    {
        return true
    }
    else{
        alert("First name must only inclde letters");
        return false;
    }
}

// Use of two user defined functions
function validate2()
{
    var lname=document.getElementById('txtlname').value;
    var letterss=/^[A-Za-z]+$/;
    
    // Use of match event
    if(lname.match(letterss))
    {
        return true
    }
    else{
        alert("Last name must only inclde letters");
        return false;
    }
}

// Use of third userdefined function
function validate3(){
    var email=document.getElementById('txtemail').value;

    // Use of == operator
    if(email==null || email=="")
    {
        alert("Email is required for Registeration")
        return false;
    }
    else{
        return true;
    }
}

// Form validation
function validate4(){
    var phonenum=document.getElementById('txtteleno').value;

    // Use of isNan built in event
    if(isNaN(phonenum))
    {
        alert("Phone number should not have Letters or symbols")
        return false;
    }
    else{
        // Generation of unique id
        var id=Date.now();
        var fffname=document.getElementById('txtfname').value;
        var lllname=document.getElementById('txtlname').value;
        var eeemail=document.getElementById('txtemail').value;
        var ppphonenum=document.getElementById('txtteleno').value;
        var pppassword=document.getElementById('paspassword').value;
        // Sending email with registration information 
        Email.send({
        Host: "smtp.gmail.com",
        Username : "witosempiresupermarket@gmail.com",
        Password : "supermarket",
        To : 'witosempiresupermarket@gmail.com',
        From : "witosempiresupermarket@gmail.com",
        Subject : "Registration Information",
        Body : "First Name:"+fffname+"<br/> Last Name:"+lllname+"<br/> Identification No.:"+id+"<br/>Email address:"+eeemail+" <br/>Contact Information:"+ppphonenum+"<br/>Password:"+pppassword+"",
        }).then(
            message => alert("mail sent successfully")
        );
        //Use of try exception handling
        return true;
    }
}

function validate5(){
    var password=document.getElementById('paspassword').value;
    var criteria=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(password.match(criteria))
    {
        return true
    }
    else{
        alert("Password should have at least one letter, number and symbol and must be between 6 to 16 elements in length");
        return false
    }
}

function validate6()
{
    var ffname=document.getElementById('txtfname').value;
    var llname=document.getElementById('txtlname').value;
    var eemail=document.getElementById('txtemail').value;
    var pphonenum=document.getElementById('txtteleno').value;
    var ppassword=document.getElementById('paspassword').value;
    // var DOB=document.getElelmentById('dob').value;
    // var DOR=document.getElementById()

    // Use of or operator
    if(ffname==null || ffname==""|| llname==null||llname==""||eemail==""||eemail==null||pphonenum==null||pphonenum==""||ppassword==null||ppassword=="")
    {
        alert("Name, Email, Contact Number and Password are all required")
        return false
    }
    else{
        return true
    }
}

function validate7(){ 
    var today =new Date();

    var inputDate = new Date(document.registrationform.dob.value);

    // Use of > operator
    if (inputDate > today) {
        alert("Wrong Date of birth entered")
        return false;
    } 
    else {
        return true;
    }
}

function validate8(){ 
    var todayy =new Date();

    var inputDatee = new Date(document.registrationform.dor.value);

    if (inputDatee > todayy) {
        alert("Wrong Date of Registration entered")

        return false;
    } 
    else {
        return true;
    }
}
