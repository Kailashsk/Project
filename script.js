function test(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var dob=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var faname=document.getElementById("faname").value;
    var falname=document.getElementById("falname").value;
    var mname=document.getElementById("mname").value;
    var mlname=document.getElementById("mlname").value;

    var nname=document.getElementById("nname").value;
    var aname=document.getElementById("aname").value;
    var city=document.getElementById("city").value;
    var country=document.getElementById("country").value;
    var tphone=document.getElementById("tphone").value;
    var tmobile=document.getElementById("tmobile").value;

    var d1=localStorage.setItem("First_Name",fname);
    var d2=localStorage.setItem("Last_Name",lname);
    var d3=localStorage.setItem("DOB",dob);

    var d5=localStorage.setItem("Father's_First_Name",faname);
    var d6=localStorage.setItem("Father's_Last_Name",falname);
    var d7=localStorage.setItem("Mother's_First_Name",mname);
    var d8=localStorage.setItem("Mother's_Last_Name",mlname);

    var d11=localStorage.setItem("Nationality",nname);
    var d12=localStorage.setItem("Address",aname);
    var d13=localStorage.setItem("City",city);
    var d14=localStorage.setItem("Country",country);

    var d4;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
    {
      d4=localStorage.setItem("Email",email);
     }
    else
    {
    alert("You have entered an invalid email address!");

    }

    var phoneno = /^\d{10}$/;
    if(tphone.match(phoneno))
        {
        var d15=localStorage.setItem("Telephone",tphone);
        }
        else
        {
            alert("phone number less than 10 digits");

        }

        if(tmobile.match(phoneno))
            {
            var d16=localStorage.setItem("Mobile",tmobile);
            }
            else
            {
                alert("phone number less than 10 digits");
   
            }


    



    var radios = document.getElementsByName("gender");
    var d9;

    for(var i=0;i<radios.length;i++){
     if(radios[i].checked){
       
      d9=radios[i].value;
      d9=localStorage.setItem("Gender",d9);
 
       }
      }

     
    
  }


