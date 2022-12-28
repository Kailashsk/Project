function test(){


    var d1=document.getElementById("hscname").value;
    var d2=document.getElementById("hscboard").value;
    var d3=document.getElementById("hscpercentage").value;
    var d4=document.getElementById("sscname").value;
    var d5=document.getElementById("sscboard").value;
    var d6=document.getElementById("sscpercentage").value;
    var d7=document.getElementById("current").value;
    var d8=document.getElementById("currentname").value;
    var d9=document.getElementById("overall").value;
    var d10=document.getElementById("backlogs").value;

    var s1=localStorage.setItem("HSC_Name",d1);
    var s2=localStorage.setItem("HSC_Board",d2);
    var s3=localStorage.setItem("HSC_Percentage",d3);
    var s4=localStorage.setItem("SSC_Name",d4);
    var s5=localStorage.setItem("SSC_Board",d5);
    var s6=localStorage.setItem("SSC_Percentage",d6);
    var s7=localStorage.setItem("Currently_pursuing",d7);
    var s8=localStorage.setItem("Currently_Name",d8);
    var s9=localStorage.setItem("Overall_percentage",d9);
    var s10=localStorage.setItem("Currently_Backlogs",d10);


}

