//Setup Gry      
      //kolor obranmowania i tła canvas
      const kolorOwc = 'red';
      const kolorSnake = 'green';
      const kolorOgn = 'lightgreen';
      const oSize = 10; //rozmiar kwadratow węza
      const sSize = 15; //rozmiar kwadratow węza
      var canvas = document.querySelector('canvas');
      canvas.width = 300;
      canvas.height = 300;
      var ctx = canvas.getContext('2d');
      	 pkt =0;
      	 speed = 16
      	 dx = 17;
      	 dy = 0;
      	 y = 150;
      	 x = 150;
      	 dsnake = 3;
//Setup Gry      	 
//Wspolrzedne Weza i Owocu
      	let snake = []
      	snake[0] ={x :150, y:150};
      	snake[1] ={x :133, y:150};
      	
      	let owoc = {
      	x: Math.floor(Math.random()*300),
      	y: Math.floor(Math.random()*300)
      	}
//Wspolrzedne Weza i Owocu
//Funkcje
	 function rysSnake(){
	 	for(var i=0; i < snake.length; i++){
	 		ctx.fillStyle = (i == 0)? kolorSnake:kolorOgn;
    		ctx.fillRect(snake[i].x,snake[i].y,sSize,sSize);
	
    		}
		} 
	 function rysOwoc(){
	 	ctx.fillStyle = kolorOwc;
	 	ctx.fillRect(owoc.x,owoc.y,oSize,oSize);
	 }
	 function dystans(x1,y1,x2,y2){
	 	let xdyst = x2 - x1;
	 	let ydyst = y2 - y1;
	 	return Math.sqrt(Math.pow(xdyst,2)+ Math.pow(ydyst,2));
	 }
	 function kolizja(){
	 	   	for(let i= 1 ; i<snake.length; i++){
	       		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
	       			clearInterval(stoprys);
	       			document.getElementById("punkty").textContent = "przegrales z wynikiem : "+ pkt;
	       		}
	       	}
	 }
//Funkcje	 
//Sterowanie 
    	document.addEventListener("keydown", ster)
    	function ster(event) {
		 const LEFT_KEY = 65;
		 const RIGHT_KEY = 68;
		 const UP_KEY = 87;
		 const DOWN_KEY = 83;
		 const keyPressed = event.keyCode;
		 const goingUp = dy === -speed;
		 const goingDown = dy === speed;
		 const goingRight = dx === speed;
		 const goingLeft = dx === -speed;
		 if (keyPressed === LEFT_KEY && !goingRight) {
		   dx = -speed;
		   dy = 0;
		 }
		 if (keyPressed === UP_KEY && !goingDown) {
		   dx = 0;
		   dy = -speed;
		 }
		 if (keyPressed === RIGHT_KEY && !goingLeft) {
		   dx = speed;
		   dy = 0;
		 }
		 if (keyPressed === DOWN_KEY && !goingUp) {
		   dx = 0;
		   dy = speed;
		 }
		}
//Sterowanie
	
    	stoprys = setInterval(rysuje,120);
    	rysSnake();
//Funkcja Rysowania
    	function rysuje()
    	{
    	kolizja();
		ctx.clearRect(0,0,canvas.width,canvas.height);
       	rysOwoc();
       	rysSnake();
       	
       		if(dystans(snake[0].x,snake[0].y,owoc.x,owoc.y) < sSize){
       			dsnake++;
       			pkt++
       			document.getElementById("punkty").textContent = pkt;
       			owoc = {
      				x: Math.floor(Math.random()*285)+5,
      				y: Math.floor(Math.random()*285)+5
      			};
	       	}
	       	else if(snake.length > dsnake){
    			snake.pop();
    		}

       		x += dx;
    		y += dy;
    		snake.unshift({x:x,y:y});
    		// usuwanie ogona
    		// Przenoszenie przez sciany | |
    		if(snake[0].x > canvas.width){
    			x = -dx;
    			
    		}
    		if(snake[0].x + 8 < 0){
    			x = canvas.width;
    		}

    		// Przenoszenie przez ___~~
    		if(snake[0].y > canvas.height){
    			y = -dy;
    		}
    		if(snake[0].y + 8 < 0){
    			y = canvas.height;
    		}
    	}
//Rysowanie