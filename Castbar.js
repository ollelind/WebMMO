var Castbar = function(){
	this.percentage = 0;
	this.width = 200;
	this.height = 40;
	this.bottomPadding = 20;
	this.fillColor = "red";
	this.borderWidth = 6;
	this.borderColor = "black";

	this.draw = function(context, leftOffset, topOffset){
      context.beginPath();
      context.rect(Game.WINDOW_WIDTH/2 - this.width/2 + Player.xPos-320, Game.WINDOW_HEIGHT-this.bottomPadding-this.height + Player.yPos-320, this.width, this.height);
      context.fillStyle = "white";
      context.lineWidth = this.borderWidth;
      context.strokeStyle = this.borderColor;
      context.fill();
      context.stroke();
      context.beginPath();
      context.rect(Game.WINDOW_WIDTH/2 - this.width/2 + this.borderWidth/2 + Player.xPos-320 , Game.WINDOW_HEIGHT-this.bottomPadding-this.height + this.borderWidth/2 + Player.yPos-320, this.width*this.percentage, this.height - this.borderWidth);
      context.fillStyle = this.fillColor;
      context.lineWidth = 0;
      context.fill();
	}
}