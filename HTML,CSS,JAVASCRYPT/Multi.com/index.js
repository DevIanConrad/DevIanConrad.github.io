// REVEAL BUTTON JS:
function changeConback() {
  var changeCon = document.getElementsByClassName("container");
  changeCon[0].style.transition= ".5s ease";
  changeCon[0].style.position= "relative";
  changeCon[0].style.visibility = "visible";
  changeCon[0].style.opacity = "1";
}
//-------------
function redo() {
  var redo = document.getElementsByClassName("index");
  if(redo[0].offsetWidth > 0 && redo[0].offsetHeight > 0) {
  redo[0].style.minHeight= "100vh";
  }
}

btnreveal.addEventListener('click', () => {

  btnreveal.style.display = "none";
  btnhide.style.visibility = 'visible';
});


// HIDE BUTTON JS:
function hide() {
  var hid = document.getElementsByClassName("row");
  var hid = document.getElementsByClassName("container");
  if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
      hid[0].style.visibility = "hidden";
      hid[0].style.opacity = "0";
  }
}
//----------------------

function changeheight() {
  var change = document.getElementsByClassName("index");
  if(change[0].offsetWidth > 0 && change[0].offsetHeight > 0) {
  change[0].style.transition= ".7s ease";
  change[0].style.minHeight= "60vh";
  }
}

function changecontainer() {
  var change = document.getElementsByClassName("container");
  if(change[0].offsetWidth > 0 && change[0].offsetHeight > 0) {
  change[0].style.position= "absolute";
  change[0].style.transition= "none";
  }
}

btnhide.addEventListener('click', () => {
  btnreveal.style.display = 'flex';
  btnreveal.style.visibility = 'visible' 
  btnhide.style.visibility = 'hidden';
});


function yourlink() {

  var locs = ['https://www.linkedin.com/in/ian-conrad-baarde-923400230/', 'https://www.facebook.com/416E67656C61/'] 

  for (let i = 0; i < locs.length; i++) {
    window.open(locs[i])
  }
  };




