function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

var nav = document.getElementById('nav');
window.onscroll = function(){
    if(window.pageYOffset > 100 ){
      menu.style.position="fixed" ;
      menu.style.top = 0;
    }else{
      menu.style.position='relative'
      menu.style.top = 100;
    }
}
//  mouse
options = {
  "outerStyle": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": false,
  "defaultCursor": true,
  "outerWidth": 41,
  "outerHeight": 41
}
magicMouse(options);

// loader
function activeShowpage(){
  let content = setTimeout(showpage, 1500);
}

function showpage(){
  document.getElementById('preLoader').style.display = 'none'
  document.getElementById('pageContent').style.display = 'block'
}



