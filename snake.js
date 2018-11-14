//Setup Gry      
      //kolor obranmowania i tła canvas
      const kolorObr = 'lightgreen';
      const kolorTla = "#17181b";
      const kolorSnake = 'lightgreen';
      const KolorObrSnake = 'red';
      const snakeSize = 15; //rozmiar kwadratow węza
      var canvas = document.querySelector('canvas');
      var ctx = canvas.getContext('2d');
      	 dx = 16;
      	 dy = 0;
      	 y = 100;
      	 x = 100;
      	 dsnake = 5;
      	
      	let pos = [
      	{x :100, y:100},
      	];

	 function rysSnake (x,y){
    	ctx.fillStyle = kolorSnake;
    	ctx.fillRect(x,y,snakeSize,snakeSize);
 	    }

    	//pop Bierze z konca
    	//push dodaje na koncu
    	//shift bierze z poczatku
    	//unshift dodaje poczatku 
    	document.addEventListener("keydown", ster)
    	function ster(event) {
		 const LEFT_KEY = 37;
		 const RIGHT_KEY = 39;
		 const UP_KEY = 38;
		 const DOWN_KEY = 40;
		 const keyPressed = event.keyCode;
		 const goingUp = dy === -10;
		 const goingDown = dy === 10;
		 const goingRight = dx === 10;
		 const goingLeft = dx === -10;
		 if (keyPressed === LEFT_KEY && !goingRight) {
		   dx = -16;
		   dy = 0;
		 }
		 if (keyPressed === UP_KEY && !goingDown) {
		   dx = 0;
		   dy = -16;
		 }
		 if (keyPressed === RIGHT_KEY && !goingLeft) {
		   dx = 16;
		   dy = 0;
		 }
		 if (keyPressed === DOWN_KEY && !goingDown) {
		   dx = 0;
		   dy = 16;
		 }
}
		function czysc(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
		}
		
	
		rysuje();
    	setInterval(rysuje,240);

    	function rysuje()
    	{
		//ogon weza
       		rysSnake(x,y);
       		x += dx;
    		y += dy;
    		pos.unshift({x:x,y:y});
    		//usuwanie ogona
    		if (pos.length > dsnake){
    			ctx.clearRect(pos[dsnake].x,pos[dsnake].y,15,15);   			
    			pos.pop();
    		}
    		//Przenoszenie przez sciany | |
    		if(pos[0].x > canvas.width){
    			x = -dx;
    			
    		}
    		if(pos[0].x + 8 < 0){
    			czysc();
    			x = canvas.width;
    		}

    		//Przenoszenie przez ___~~
    		if(pos[0].y > canvas.height){
    			y = -dy;
    		}
    		if(pos[0].y + 8 < 0){
    			czysc();
    			y = canvas.height;
    		}
    	}
