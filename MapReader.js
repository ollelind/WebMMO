// Handles maps etc

var MapReader = function(map){
	this.map = map;
	this.tilemap = new Image();
	this.tilemap.src = 'images/ground.png';

	this.height = function(){
		return map.height;
	}
	this.width = function(){
		return map.width;
	}

	function blocked(x, y){
		var tileId = getTileForCoords(x, y);
		var ground = getGroundObjectForIdentifier(tileId);
		return ground.blocking;
	}

	function friction(x, y){
		var tileId = getTileForCoords(x, y);
		var ground = getGroundObjectForIdentifier(tileId);
		return ground.friction;
	}

	this.frameIntersectsBlockage = function(frame){
		if(blocked(frame.x, frame.y) || 
			blocked(frame.x + frame.width, frame.y) || 
			blocked(frame.x, frame.y + frame.height) ||
			blocked(frame.x + frame.width, frame.y + frame.height) ||
			blocked(frame.x + frame.width/2, frame.y) ||
			blocked(frame.x + frame.width/2, frame.y + frame.height) ||
			blocked(frame.x, frame.y + frame.height/2) || 
			blocked(frame.x + frame.width, frame.y + frame.height/2)){
			return true;
		}
		return false;
	}

	function getTileForCoords(x, y){
		var tileX = Math.floor(x/X_SIZE);
		var tileY = Math.floor(y/Y_SIZE);
		return map.data[tileY][tileX];
	}

	function convertPositionToCoords(x, y){
		return {x:32*x, y:32*y};
	}

	this.draw = function(context){
		for(var w=0; w < this.width(); w++){
			for(var h=0; h < this.height(); h++){

				if(isVisible(w, h)){
					var ground = getGroundObjectForIdentifier(map.data[h][w]);
					context.drawImage(this.tilemap, ground.getX(), ground.getY(), 32, 32, w*Game.TILE_SIZE, h*Game.TILE_SIZE, 32, 32);
					
				}
				
			}
		}
	}

	function isVisible(x, y){
		var startX = Math.floor((Player.xPos-320)/Game.TILE_SIZE);
		var startY = Math.floor((Player.yPos-320)/Game.TILE_SIZE);
		var stopX = startX + Game.GAME_SIZE;
		var stopY = startY + Game.GAME_SIZE;
		if(x >= startX && x <= stopX && y >= startY && y <= stopY){
			return true;
		}
		return false;
	}

	function getGroundObjectForIdentifier(identifier){
		if(identifier.length > 3)
			identifier = getGroundIdForIdentifier(identifier);

		switch(identifier){
			case 0:
				return new Ground(3,2,false,1.0);
			case 1:
				return new Ground(1,1,true,0.0);
			case 2:
				return new Ground(0,0,true,0.0);
			case 3:
				return new Ground(1,0,true,0.0);
			case 4:
				return new Ground(2,0,true,0.0);
			case 5:
				return new Ground(0,1,true,0.0);
			case 6:
				return new Ground(2,1,true,0.0);
			case 7:
				return new Ground(0,2,true,0.0);
			case 8:
				return new Ground(1,2,true,0.0);
			case 9:
				return new Ground(2,1,true,0.0);
			case 10:
				return new Ground(3,0,true,0.0);
			case 11:
				return new Ground(4,0,true,0.0);
			case 12:
				return new Ground(3,1,true,0.0);
			case 13:
				return new Ground(4,1,true,0.0);
			case 14:
				return new Ground(4,2,true,0.0);
			case 15:
				return new Ground(5,0,false,0.5);
			case 16:
				return new Ground(5,1,false,0.5);


			default:
				return new Ground(3,2,false,1.0); // Default, return grass
		}
			
	}

	function getGroundIdForIdentifier(identifier){
		switch(identifier){
			case "GRASS_1":
				return 0;
			case "WATER_1":
				return 1;
			case "TOP_LEFT_WATER_EDGE":
				return 2;
			case "TOP_WATER_EDGE":
				return 3;
			case "TOP_RIGHT_WATER_EDGE":
				return 4;
			case "LEFT_WATER_EDGE":
				return 5;
			case "RIGHT_WATER_EDGE":
				return 6;
			case "BOTTOM_LEFT_WATER_EDGE":
				return 7;
			case "BOTTOM_WATER_EDGE":
				return 8;
			case "BOTTOM_RIGHT_WATER_EDGE":
				return 9;
			case "TOP_LEFT_GRASS_EDGE":
				return 10;
			case "TOP_RIGHT_GRASS_EDGE":
				return 11;
			case "BOTTOM_LEFT_GRASS_EDGE":
				return 12;
			case "BOTTOM_RIGHT_GRASS_EDGE":
				return 13;
			case "WATER_TOAD_LEAF":
				return 14;
			case "GRASS_RED_FLOWERS":
				return 15;
			case "GRASS_WHITE_FLOWERS":
				return 16;
		}

	}

	function getObstacleObjectForIdentifier(identifier){
		switch(identifier){
			case 0:
				return new Obstacle(0,0,true,1.0,false,false,"Green leaf bush");
			case 1:
				return new Obstacle(1,0,true,1.0,false,false,"A heavy rock");
			case 2:
				return new Obstacle(0,1,true,1.0,false,false,"A heavy stone block");
			
			default:
				return new Obstacle(0,0,true,1.0,false,false,"???");
		}
	}
	function getObstacleIdForIdentifier(identifier){
		switch(identifier){
			case "GREEN_BUSH_1":
				return 0;
			case "STONE_1":
				return 1;
			case "STONE_BLOCK":
				return 2;
		}
	}

}

function Ground(tile_x, tile_y, blocking, friction){
	this.tile_x = tile_x;
	this.tile_y = tile_y;
	this.blocking = blocking;
	this.friction = friction;

	this.getX = function(){
		return tile_x * Game.TILE_SIZE;
	}
	this.getY = function(){
		return tile_y * Game.TILE_SIZE;
	}
}

function Obstacle(tile_x, tile_y, blocking, friction, movable, useable, description){
	this.tile_x = tile_x;
	this.tile_y = tile_y;
	this.blocking = blocking;
	this.friction = friction;
	this.movable = movable;
	this.useable = useable;
	this.description = description;

	this.getX = function(){
		return tile_x * Game.TILE_SIZE;
	}
	this.getY = function(){
		return tile_y * Game.TILE_SIZE;
	}
}