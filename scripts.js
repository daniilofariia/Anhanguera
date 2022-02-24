



function alerta(){
	alert("Esse Site é Apenas um modelo para portifólio")
}

var numSlide=1;
mostrarSlide(numSlide);

function mudarSlide(ns){
	mostrarSlide(numSlide += ns);
}

function Slideatual(ns){
	mostrarSlide(numSlide = ns);
}

function mostrarSlide(ns){
	var slides=document.getElementsByClassName("slide");
	var indicadores=document.getElementsByClassName("indicador");
	if(ns > slides.length){
		numSlide=1;
	}	if(ns < 1){
		numSlide=slides.length;}

	for(var i=0;i<slides.length;i++){
		slides[i].style.display="none";
	} 
	for(var i=0;i<indicadores.length;i++){
		indicadores[i].className = indicadores[i].className.replace(" ativo","");}

	slides[numSlide-1].style.display="block";
	indicadores[numSlide-1].className += " ativo";}





  






const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){
	fixarMenuNoTopo();
}
function fixarMenuNoTopo(){
		if(window.pageYOffset >= topoNav){
			nav.classList.add("fixoNoTopo");
		}
		else{nav.classList.remove("fixoNoTopo");}
}

window.addEventLister("load",alerta());