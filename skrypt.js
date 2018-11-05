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