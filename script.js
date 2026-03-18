
let img = document.getElementById("img")
let qrimg = document.getElementById("qrimg")
let qrtext = document.getElementById("qrtext")
let btn = document.getElementById("btn")
let error = document.getElementById("error")
function QRgen(){
  
          if(qrtext.value==""){
    error.innerHTML="Enter Text or URL first and Try again!"
         img.style.height="0px"
     return 
}
   else if(qrtext.value!="")
   {
    error.innerHTML="" 
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value
       img.style.height="250px"
   }
}
btn.addEventListener("click",QRgen)
addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    {
        QRgen()
    }
}

)

