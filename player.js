var Player = function(xPos, yPos){
	this.xPos = xPos;
	this.yPos = yPos;
	this.image = new Image();
	this.image.src = 'images/zombie.png';
	this.angle = 0.0;
	this.targetAngle = 0.0;
	this.radius = 20;
	this.speed = 1.0;

	this.moving = false;

	this.currentFrame=0;
	this.nextFrame = function(){
		this.currentFrame++;
		if(this.currentFrame > 11)
			this.currentFrame=0;
	}

	this.draw = function(context){
		this.rotateIfNeeded();
		context.translate(this.xPos, this.yPos);
		context.rotate(this.angle);
		var frame;
		if(this.moving){
			frame = frames[this.currentFrame];
		}
		else{
			frame = frames[5];
		}
			
		context.drawImage(this.image, frame.x, frame.y, frame.width, frame.height, -frame.width/2, -frame.height/2, frame.width, frame.height);
		context.rotate(-this.angle);
		context.translate(-this.xPos,-this.yPos);

	}

	this.rotate = function(x, y){
		var deltaX = x - (this.xPos+20) + (this.xPos-320);
		var deltaY = y- (this.yPos+15) + (this.yPos-320);
		var deg = -Math.atan2(deltaX, deltaY) + Math.PI/2;

		this.angle = deg;
	}

	this.rotateIfNeeded = function(){
		var clockwise = Math.abs(this.targetAngle) - Math.abs(this.angle);
		var counterClockwise = Math.abs(this.targetAngle) + Math.abs(this.angle);
		//console.log(clockwise, counterClockwise);
		
		var diff = Math.abs(this.targetAngle-this.angle);
		var diffAngle = Math.atan2(Math.sin(this.targetAngle-this.angle), Math.cos(this.targetAngle- this.angle));
		// If the angle difference is less then one iteration, make them equal, so that the angle wont to over the target.
		if(diff > 0.2 && Math.abs(diffAngle) > 0.1){
			if(diffAngle > 0){
				this.angle += 0.1;
			}else{
				this.angle -= 0.1;
			}
		}else{
			this.angle = this.targetAngle;
		}
	}

	this.setAngleForInput = function(input){
		if(input.up && input.right){
			this.targetAngle = -Math.PI/4;
		}
		else if(input.up && input.left){
			this.targetAngle = -Math.PI*3/4;
		}
		else if(input.down && input.right){
			this.targetAngle = Math.PI/4;
		}
		else if(input.down && input.left){
			this.targetAngle = Math.PI*3/4;
		}
		else if(input.up){
			this.targetAngle = -Math.PI/2;
		}
		else if(input.down){
			this.targetAngle = Math.PI/2;	
		}
		else if(input.left){
			this.targetAngle = -Math.PI;
		}
		else if(input.right){
			this.targetAngle = 0;
		}
	}

	this.setPosition = function(x, y){
		this.xPos = x + 320;
		this.yPos = y + 320;
	}
	this.getBounds = function(){
		return {x:this.xPos-20, y:this.yPos-15, width:40, height:30};
	}

	var frames = [{x:0, y:0, width:40, height:31},
				  {x:40, y:0, width:40, height:31},
				  {x:80, y:0, width:40, height:31},
				  {x:120, y:0, width:40, height:31},
				  {x:160, y:0, width:40, height:31},
				  {x:200, y:0, width:40, height:31},
				  {x:240, y:0, width:40, height:31},
				  {x:280, y:0, width:40, height:31},
				  {x:320, y:0, width:40, height:31},
				  {x:360, y:0, width:40, height:31},
				  {x:400, y:0, width:40, height:31},
				  {x:440, y:0, width:40, height:31},
				  ];


}