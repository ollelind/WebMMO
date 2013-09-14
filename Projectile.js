var Projectile = function(x, y, dx, dy, angle){
	this.xPos = x;
	this.yPos = y;
	this.dx = dx;
	this.dy = dy;
	this.image = new Image();
	this.image.src = 'images/arrow.png';
	this.angle = angle;
	this.targetAngle = 0.0;
	this.radius = 9;
	this.speed = 7.0;

	this.calculateAngle = function(){
		var deltaX = this.xPos - this.dx;
		var deltaY = this.yPos - this.dy;
		this.angle = -Math.atan2(deltaX, deltaY) + Math.PI/2;
	}
	//this.calculateAngle();


	this.draw = function(context){
			this.xPos += this.speed * this.dx;
			this.yPos += this.speed * this.dy;

			context.translate(this.xPos, this.yPos);
			context.rotate(this.angle);
			var frame = frames[0];
			context.drawImage(this.image, frame.x, frame.y, frame.width, frame.height, -frame.width/2, -frame.height/2, frame.width, frame.height);
			context.rotate(-this.angle);
			context.translate(-this.xPos,-this.yPos);

		}

	var frames = [{x:0, y:0, width:17, height:3}];

}

