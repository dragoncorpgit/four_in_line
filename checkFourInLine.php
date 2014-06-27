<?php
 //$array=array(array(2,1,1,1,1),array(1,2,1,2,1),array(1,1,2,2,2),array(1,1,1,2,1),array(1,2,1,2,1)); 
 //$line=1+checkFourInLine(0, 3, 2, 3, 2, 1, 0, $array)+checkFourInLine(0, 3, 2, 1, 2, -1, 0, $array);
 //$row=1+checkFourInLine(0, 3, 1, 0, 1, 0, 1, $array)+checkFourInLine(0, 3, 1, 0, 0, 0, -1, $array);
 //$diagUp=1+checkFourInLine(0, 3, 2, 0, 0, -1, -1, $array)+checkFourInLine(0, 3, 2, 2, 2, 1, 1, $array);
 //$diagDown=1+checkFourInLine(0, 3, 1, 3, 0, 1, -1, $array)+checkFourInLine(0, 3, 1, 1, 2, -1, 1, $array);
 
 function checkFourInLine($startPosition,$endPosition, $player, $x, $y,$xMultiplier,$yMultiplier,$array)
 {
  if($startPosition<$endPosition)
  {
   if($x<count($array) && $x>-1)
   {
    if($y<count($array[$x]) && $y>-1)
    {
     if($array[$y][$x]==$player)
     {
      return checkFourInLine($startPosition+1, $endPosition, $player, $x+($xMultiplier*1), $y+($yMultiplier*1), $xMultiplier, $yMultiplier, $array);
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