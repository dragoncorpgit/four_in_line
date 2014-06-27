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

function httpRequest(str)
{
 xhr=startConnection();
 xhr.onreadystatechange=function(){
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
            processResponse(xhr.responseText);
           }
           else
           {
            //returna erro
           }
          break;
  }
 };
 xhr.open("POST",'index.php',true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(str);
}

function processResponse(response)
{
 
}

//////////////////////////////////////////
function startPlay(namePlayer, type)
{
 httpRequest("action=AddPlayer&type="+type+"&playerName="+namePlayer);
}

function createGame(rows, columns)
{
 var cookie=cookieToArray();
 httpRequest("action=CreateGame&type="+getValueByKey(cookie,'type')+"&playerID="+getValueByKey(cookie,'playerID'));
}

function AddToGame(gameID)
{
 var cookie=cookieToArray();
 httpRequest("action=AddToGame&type="+getValueByKey(cookie,'type')+"&playerID="+getValueByKey(cookie,'playerID')+"&gameID="+gameID);
}

function playInPosition(y)
{
 var cookie=cookieToArray();
 httpRequest("action=play&type="+getValueByKey(cookie,'type')+"&playerID="+getValueByKey(cookie,'playerID')+"&gameID="+getValueByKey(cookie,'gameID')+"&colPlayed="+y);
}

function getAllPendingGames()
{
 httpRequest("action=GetPendingGames");
}

function waitForPlayer()
{
 httpRequest("action=WaitForPlayer");
}

////////////////////////////////////////
function cookieToArray()
{
 var cookie=document.cookie.split(';');
}

function getValueByKey(array, key)
{
 var str=null;
 for(var i=0;i<array.length;i++)
 {
  var array2=array[i].split('=');
  if(array2[0]==key)
  {
   str=array2[1];
  }
 }

 return str;
}