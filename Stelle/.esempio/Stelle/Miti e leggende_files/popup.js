var newWin;


function popUpN(page) {
newWin=window.open(page,"S",'width=640,height=450,left=50,top=50,resizable=yes,toolbar=yes,scrollbars=yes');
newWin.focus();
return false;
}

function rndnumber(howMany){
 var randscript = -1;
 while (randscript < 0 || randscript > howMany || isNaN(randscript)){
   randscript = parseInt(Math.random()*(howMany+1));
 }
 return randscript;
}

function reOpen(page) {
 location.href=page;
 return false;
}
