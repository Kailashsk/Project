

function test(){


    //For Passport
    var passport=document.getElementById("passport");
    var valExt=["jpeg","png","jpg"];

    if(passport.value!=''){

        var nm=passport.value.lastIndexOf('.')+1;
        var ext=passport.value.substring(nm);

        var result=valExt.includes(ext);
        if(result==false)
        {
            alert("JPG and PNG File Upload For Passport");
            return false;
        }
        else
        {
            if(parseFloat(passport.files[0].size/(1024*1024))>4)
            {
                alert("Passport size must be less than 4MB");
            }
            else
            {
                var s10=localStorage.setItem("Passport",passport.value);
            }
        }

    }
    else
    {
        alert("Passport Photo is not selected");
        return false;
    }

    ///////////////////////////////


        //For HSC Marksheet
        var hscmarksheet=document.getElementById("hscmarksheet");
        var valExt=["jpeg","png","jpg","pdf"];
    
        if(hscmarksheet.value!=''){
    
            var nm=hscmarksheet.value.lastIndexOf('.')+1;
            var ext=hscmarksheet.value.substring(nm);
    
            var result=valExt.includes(ext);
            if(result==false)
            {
                alert("JPG,PNG and PDF File Upload For HSC Marksheet");
                return false;
            }
            else
            {
                if(parseFloat(passport.files[0].size/(1024*1024))>4)
                {
                    alert("HSC Marksheet size must be less than 4MB");
                }
                else
                {
                    var s10=localStorage.setItem("HSC Marksheet",hscmarksheet.value);
                }
            }
    
        }
        else
        {
            alert("HSC Marksheet is not selected");
            return false;
        }
    
        ///////////////////////////////


                //For SSC Marksheet
                var sscmarksheet=document.getElementById("sscmarksheet");
                var valExt=["jpeg","png","jpg","pdf"];
            
                if(sscmarksheet.value!=''){
            
                    var nm=sscmarksheet.value.lastIndexOf('.')+1;
                    var ext=sscmarksheet.value.substring(nm);
            
                    var result=valExt.includes(ext);
                    if(result==false)
                    {
                        alert("JPG,PNG and PDF File Upload For SSC Marksheet");
                        return false;
                    }
                    else
                    {
                        if(parseFloat(sscmarksheet.files[0].size/(1024*1024))>4)
                        {
                            alert("SSC Marksheet size must be less than 4MB");
                        }
                        else
                        {
                            var s10=localStorage.setItem("SSC Marksheet",sscmarksheet.value);
                        }
                    }
            
                }
                else
                {
                    alert("SSC Marksheet is not selected");
                    return false;
                }
            
                ///////////////////////////////

                //For All Semester Marksheet
                var allsemester=document.getElementById("allsemester");
                var valExt=["pdf"];
                
                if(allsemester.value!=''){
            
                    var nm=allsemester.value.lastIndexOf('.')+1;
                    var ext=allsemester.value.substring(nm);
            
                    var result=valExt.includes(ext);
                    if(result==false)
                    {
                        alert("PDF File Upload For All Semester Marksheet");
                        return false;
                    }
                    else
                    {
                        if(parseFloat(allsemester.files[0].size/(1024*1024))>10)
                        {
                            alert("All Semester Marksheet size must be less than 10MB");
                        }
                        else
                        {
                            var s10=localStorage.setItem("All Semester Marksheet",allsemester.value);
                        }
                    }
            
                }
                else
                {
                    alert("All Semester Marksheet is not selected");
                    return false;
                }
            
                ///////////////////////////////


    
}

