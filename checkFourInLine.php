<?php
 function checkFourInLine($startPosition,$endPosition, $player, $x,$y,$xMultiplier,$yMultiplier,$array)
 {
  if($startPosition<$endPosition)
  {
   $x+=($xMultiplier*1);
   $y+=($yMultiplier*1);
   if(count($array)<$x)
   {
    if(count($array[$x])<$y)
    {
     if($array[$x][$y]==$player)
     {
      return checkFourInLine($startPosition+1, $endPosition, $player, $x, $y, $xMultiplier, $yMultiplier, $array);
     }
     else
     {
      return $startPosition; 
     }
    }
    else
    {
     return $startPosition;
    }
   }
   else
   {
    return $startPosition;
   }
  }
  else
  {
   return $startPosition;
  }
 }
?>