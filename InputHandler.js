function InputHandler(){

	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
    this.mouseX;
    this.mouseY;
    this.mouseDown = false;

	var LEFT = 65;
	var RIGHT = 68;
	var UP = 87;
	var DOWN = 83;

    this.keyDown = function(keyCode){
        if (keyCode === LEFT) { // left
            this.left = true;
        } 
        else if (keyCode === RIGHT) { // right
            this.right = true;
        }
        else if (keyCode === UP) { // up
            this.up = true;
        }
        else if (keyCode === DOWN) { // down
            this.down = true;
        }
    }

    this.keyUp = function(keyCode){
        if (keyCode === LEFT) { // left
            this.left = false;
        } 
        else if (keyCode === RIGHT) { // right
            this.right = false;
        }
        else if (keyCode === UP) { // up
            this.up = false;
        }
        else if (keyCode === DOWN) { // down
            this.down = false;
        }
    }

}