
//Kalkulator
  	function insert(num){
      		document.form.wynik.value = document.form.wynik.value+num;
    }
	
	function equal(){
		var exp = document.form.wynik.value
		if(exp){
			document.form.wynik.value = eval(exp) 
		};
	}
	function clean(){
		document.form.wynik.value = "";
	}	
	function back(){
		var exp = document.form.wynik.value;
		document.form.wynik.value = exp.substring(0,exp.length-1); 
	}
//END OF calc

//Losowanie KOlorow
function ustaw() {
	ListKwad = document.getElementsByClassName("kolor");
	for(var i = 0; i< ListKwad.length;i++)
	{
		var red = Math.floor(Math.random() * 256 );
 		var green = Math.floor(Math.random() * 256 );
		var blue = Math.floor(Math.random() * 256 );
    	ListKwad[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"; // random color
	}
		zmienjeden();
		document.getElementById("wiadomosc").style.background = "#17181b";

}
//Losowanie KOlorow
function zmienjeden(){
	var i = Math.floor(Math.random()* 5)
	var red = Math.floor(Math.random() * 256 );
 	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	ListKwad[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	wybKolor = "rgb(" + red + ", " + green + ", " + blue + ")"
	document.getElementById("wiadomosc").textContent = wybKolor;
}

function sprawdz(x){ //Sprawdzanie kolorw czy sa dobre;
	if(x.style.backgroundColor === wybKolor){
		document.getElementById("wiadomosc").style.background = wybKolor;
		for(var i = 0; i< ListKwad.length;i++)
		{
    	ListKwad[i].style.backgroundColor = wybKolor; // random color
		}
	}
	else{
		x.style.backgroundColor = "#17181b";
	}
}
