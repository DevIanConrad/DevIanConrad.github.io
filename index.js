
    // List of sentences
var _CONTENT = [ "A Web/Software Developer", "An Aspiring Full-Stack Developer", "An Aspiring Software Engineer", "A Cinematographer", "A Video Editor", ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text"); 

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 30);
		}, 2500);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === 'A') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
	
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


// Hover Effect-------------------------------------------------------

var box1 = document.getElementById("bx1");

	box1.addEventListener("mouseover", function( event ) {   
		document.getElementById("_txt1").style.display = "block";
		document.getElementById("_txt1").style.transition = ".5s";
		document.getElementById("img1").style.position = "absolute";
		document.getElementById("img1").style.transition = ".5s";
		document.getElementById("img1").style.opacity = "0";
	   
	   }, false);

	   box1.addEventListener("mouseleave", function( event ) { 
		document.getElementById("_txt1").style.display = "none";
		document.getElementById("_txt1").style.transition = ".5s";
		document.getElementById("img1").style.position = "relative";
		document.getElementById("img1").style.transition = ".5s";
		document.getElementById("img1").style.opacity = "1";
	}, false);

var box2 = document.getElementById("bx2");

	box2.addEventListener("mouseover", function( event ) {   
		document.getElementById("_txt2").style.display = "block";
		document.getElementById("_txt2").style.transition = ".5s";
		document.getElementById("img2").style.position = "absolute";
		document.getElementById("img2").style.transition = ".5s";
		document.getElementById("img2").style.opacity = "0";
	   
	   }, false);

	   box2.addEventListener("mouseleave", function( event ) { 
		document.getElementById("_txt2").style.display = "none";
		document.getElementById("_txt2").style.transition = ".5s";
		document.getElementById("img2").style.position = "relative";
		document.getElementById("img2").style.transition = ".5s";
		document.getElementById("img2").style.opacity = "1";
	}, false);


	var box3 = document.getElementById("bx3");

	box3.addEventListener("mouseover", function( event ) {   
		document.getElementById("_txt3").style.display = "block";
		document.getElementById("_txt3").style.transition = ".5s";
		document.getElementById("img3").style.position = "absolute";
		document.getElementById("img3").style.transition = ".5s";
		document.getElementById("img3").style.opacity = "0";
	   
	   }, false);

	   box3.addEventListener("mouseleave", function( event ) { 
		document.getElementById("_txt3").style.display = "none";
		document.getElementById("_txt3").style.transition = ".5s";
		document.getElementById("img3").style.position = "relative";
		document.getElementById("img3").style.transition = ".5s";
		document.getElementById("img3").style.opacity = "1";
	}, false);
//---------------------------------------------------------------------

function onHoverAdd()
{
    $("#menuImgAdd").attr('src', 'gif/RTUDMS.gif');
	
}

function offHoverAdd()
{
    $("#menuImgAdd").attr('src', 'proj/RTUDMS.png');
}

function onHoverAdd2()
{
    $("#menuImgAdd2").attr('src', 'gif/LANDINGPAGE.gif');
	
}

function offHoverAdd2()
{
    $("#menuImgAdd2").attr('src', 'proj/LANDINGPAGE.png');
}

function onHover()
{
    $("#menuImg").attr('src', 'gif/multapp.gif');
	
}

function offHover()
{
    $("#menuImg").attr('src', 'proj/multapp.png');
}

function onHover1()
{
    $("#menuImg1").attr('src', 'gif/portfolio.gif');
	
}

function offHover1()
{
    $("#menuImg1").attr('src', 'proj/portfolio.png');
}

function onHover2()
{
    $("#menuImg2").attr('src', 'gif/ecommerce.gif');
	
}

function offHover2()
{
    $("#menuImg2").attr('src', 'proj/ecommerce.png');
}

function onHover3()
{
    $("#menuImg3").attr('src', 'gif/shop.gif');
	
}

function offHover3()
{
    $("#menuImg3").attr('src', 'proj/shop.png');
}

function onHover4()
{
    $("#menuImg4").attr('src', 'gif/mj.gif');
	
}

function offHover4()
{
    $("#menuImg4").attr('src', 'proj/mj.png');
}

function onHover5()
{


    $("#menuImg5").attr('src', 'gif/first.gif');
	
}

function offHover5()
{

    $("#menuImg5").attr('src', 'proj/first.png');
}

window.addEventListener('DOMContentLoaded', function() {
    var divsToLoad = Array.from(document.querySelectorAll('.load-on-scroll'));
    var loadedDivs = [];

    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    var isMobile = window.innerWidth <= 480;

  if (isMobile) {
  
    options.threshold = 0.3;
  }

    function handleIntersection(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !loadedDivs.includes(entry.target)) {
          entry.target.classList.remove('nonVisible');
          entry.target.classList.add('visible');
          loadedDivs.push(entry.target);
        }
      });
    }

    var observer = new IntersectionObserver(handleIntersection, options);
    divsToLoad.forEach(function(div) {
      observer.observe(div);
    });
  });



