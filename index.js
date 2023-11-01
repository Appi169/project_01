function validation()
{
    if(document.formfill.username.value == "")
    {
    document.getElementById("result").innerHTML="enter username*"
     return false;
}
else if
    (document.formfill.username.value.length>6)
    {
    document.getElementById("result").innerHTML="atleast six digit"
     return false;

}
else if(document.formfill.email.value == "")
    {
    document.getElementById("result").innerHTML="enter your email"
     return false;
    }
else if(document.formfill.password.value == "")
    {
    document.getElementById("result").innerHTML="enter your password*"
     return false;
    }
    // else if(document.formfill.password.value.length<6)
    // {
    // document.getElementById("result").innerHTML="password must be 6-digits"
    //  return false;
    // }
else if(document.formfill.Cpassword.value == "")
    {
    document.getElementById("result").innerHTML="enter confirm password*"
     return false;
    }
else if(document.formfill.password.value !== document.formfill.Cpassword.value)
    {
    document.getElementById("result").innerHTML="password doesn't matched"
     return false;
    }
else if(document.formfill.Cpassword.value == document.formfill.password.value)
    {
    popup.classList.add("open-slide")
     return false;
    }

}
var popup= document.getElementById("popup");