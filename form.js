   
    let psw=document.getElementById("psw")
    let phoneno= document.getElementById("phoneno")
    function validate() {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneno.test(num.value)&name.value){
        return true;
    }
    else if (psw.value.length >= 12) {
      psw.style.border = "2px solid green";
      alert("password is strong");
      return true;
    } else if (psw.value.length >= 4) {
      psw.style.border = "5px solid orange";
      alert("password strength is medium");
      return false;
    } else {  psw.style.border = "2px solid red";
      alert("password strength is low");
      return false;
    }
}

    
      
    


  