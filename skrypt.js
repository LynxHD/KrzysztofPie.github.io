
//Kalkulator
	reset = 0;
  	function insert(num){
      		if(reset == 1){
      		document.form.wynik.value = "";
      		document.form.wynik.value = document.form.wynik.value+num;
      		reset = 0;
      		}
      		else {
      			document.form.wynik.value = document.form.wynik.value+num;
      		}
    }
	
	function equal(){
		var exp = document.form.wynik.value
		if(exp){
			document.form.wynik.value = eval(exp) 
		};
		reset = 1;
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
	document.getElementById("Bkolor").style.background ="#17181b" ;
	document.getElementById('reset').style.visibility = 'hidden';
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
	//Zaladuj kolory przy starcie strony
	document.addEventListener("DOMContentLoaded", function()
	{
  	ustaw();
	});

//Losowanie KOlorow
//Wybor jednego boxu
 function zmienjeden(){
	var i = Math.floor(Math.random()* 5)
	var red = Math.floor(Math.random() * 256 );
 	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	ListKwad[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	wybKolor = "rgb(" + red + ", " + green + ", " + blue + ")"
	document.getElementById("wiadomosc").textContent = wybKolor;
	}
//Wybior jednego boxu
//Sprawdzanie kolorow 
 function sprawdz(x){ 
	if(x.style.backgroundColor === wybKolor){
		document.getElementById("Bkolor").style.background = wybKolor;
		document.getElementById("wiadomosc").style.background = wybKolor;
		document.getElementById('reset').style.visibility = 'visible';
		for(var i = 0; i< ListKwad.length;i++)
		{
    	ListKwad[i].style.backgroundColor = wybKolor; // random color
		}
	}
	else{
		x.style.backgroundColor = "#17181b";
	}
 }
//sprwadzanie kolorow