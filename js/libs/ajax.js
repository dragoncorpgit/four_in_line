function startConnection()
{
 var xhr;
 if(window.XMLHttpRequest)
 {
  xhr=new XMLHttpRequest();
 }
 else
 {
  xhr=new ActiveXObject("Microsoft.XMLHTTP");
 }
 return xhr;
}

function httpRequest(xhr,str)
{
 xhr=startConnection();
 xhr.onreadystatechange=eventReadyStateChanged(xhr);
 xhr.open("POST",'index.php',true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(str);
}

function eventReadyStateChanged(xhr)
{
 switch(xhr.readyState)
 {
  case 0:
        break;
  case 1:
         break;
  case 2:
         break;
  case 3:
         break;
  case 4: if(xhr.status==200)
          {
           processResponse(xhr.response);
          }
          else
          {
           
          }
         break;
 }
}

function processResponse(response)
{
 
}

function playWithComputer()
{
 
}