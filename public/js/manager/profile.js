function profileData(){
    const row=document.getElementById("details");
    let httprequest=new XMLHttpRequest();
    httprequest.onreadystatechange=function(){
        if(httprequest.readyState==4 && httprequest.status==200){
           // console.log(row)
           console.log(httprequest.responseText)
            const obj=JSON.parse(httprequest.responseText)
        //    console.log(obj[0].full_name)
            let profilePic=document.getElementById("bigPicture")
           
            // profilePic.src="http://localhost/project/images/profilePicsEmployee/wallpaper-for-less-remodelideas.co.jpg"
            // console.log("http://localhost/project/images/profilePicsEmployee/"+String(obj[0].profile_pic))
           var gender;
           if(obj[0].gender=="m"){
                gender="Male";
           }else{
               gender="Female"
           }

          
               row.innerHTML=
           '<div class="row-1"><div class="col-1">Full Name</div><div class="col-2">:</div><div class="col-3">'+obj[0].name+'</div></div>'+
            '<div class="row-1"> <div class="col-1">NIC</div> <div class="col-2">:</div><div class="col-3">'+obj[0].nic+'</div></div>'+
            '<div class="row-1"><div class="col-1">Date of Birth</div><div class="col-2">:</div><div class="col-3">'+obj[0].dob+'</div></div>'+
            '<div class="row-1"><div class="col-1">Gender</div><div class="col-2">:</div><div class="col-3">'+gender+'</div></div>'+
            '<div class="row-1"><div class="col-1">Arival Date</div><div class="col-2">:</div><div class="col-3">'+obj[0].hired_date+'</div></div>'+
            // '<div class="row-1"><div class="col-1">Title</div><div class="col-2">:</div><div class="col-3">Student</div></div>'+
            '<div class="row-1"><div class="col-1">Address</div><div class="col-2">:</div><div class="col-3">'+obj[0].address+'</div></div>'+
           ' <div class="row-1"><div class="col-1">Contact Number</div><div class="col-2">:</div><div class="col-3">'+obj[0].contact_no+'</div>'

        
        }
    }

    var url="http://localhost/project/Manager/profileLogic";
    httprequest.open("POST",url,true)
    httprequest.send()

}

profileData()