var Person = function(src, pos)
{
	this.src = src;
	this.pos = pos;
}

Person.prototype.setPos = function(pos)
{
	this.pos = pos;
	this.src.style.left = pos.x + "px";
	this.src.style.top = pos.y + "px";	
}