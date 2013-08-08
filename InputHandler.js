function InputHandler(){

	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;

	var LEFT = 65;
	var RIGHT = 68;
	var UP = 87;
	var DOWN = 83;

	window.addEventListener('keydown', function(e) {
        if (e.keyCode === LEFT) { // left
        	this.left = true;
        } 
        else if (e.keyCode === RIGHT) { // right
            this.right = true;
        }
        else if (e.keyCode === UP) { // up
            this.up = true;
        }
        else if (e.keyCode === DOWN) { // down
            this.down = true;
        }
    }, false);

	window.addEventListener('keyup', function(e) {
        if (e.keyCode === LEFT) { // left
        	this.left = false;
        } 
        else if (e.keyCode === RIGHT) { // right
            this.right = false;
        }
        else if (e.keyCode === UP) { // up
            this.up = false;
        }
        else if (e.keyCode === DOWN) { // down
            this.down = false;
        }
    }, false);

document.getElementById('main_canvas').onmousemove = function(e){
	player.rotate(e.pageX - this.offsetLeft , e.pageY - this.offsetTop);
};

}