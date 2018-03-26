/**
Shows all containers of the main screen u want to switch to
@param p_id_new: All containers beginning with this string will be shown, all others hidden
*/
function changeMainScreenTo(p_id_new)
{

	for(var i in containers)
	{
		if(containers[i].id.substring(0, p_id_new.length) == p_id_new)
			containers[i].classList.remove("hidden");
		else
			containers[i].classList.add("hidden");	
	}

}

/**
Returns the value of a src like "200px"
@return the number part
*/
function pxToValue(src)
{
	console.log(src);
	return parseInt(src.substring(0, src.length-2));
}

/**
Looks for a specific color in a line. If the start- and endposition are not in the same line, the function will be useless.
@param posBegin: the start position
@param posEnd: the end position
@param color: the color the function will be looking for
@return: the position of the color if found, null if not
*/
function findColorInLine(posBegin, posEnd, color)
{
	for(i = posBegin.x; i <= posEnd.x; i++)
	{
		for(j = posBegin.y; j <= posEnd.y; j++)
		{
		//	console.log("(" + i + "," + j + ")" + "r: " + context.getImageData(i, j, 1, 1).data[0] + " g:" + context.getImageData(i, j, 1, 1).data[1] + " b: " + context.getImageData(i, j, 1, 1).data[2]);
			if(context.getImageData(i, j, 1, 1).data[0] == color.r 
			&& context.getImageData(i, j, 1, 1).data[1] == color.g
			&& context.getImageData(i, j, 1, 1).data[2] == color.b)
			{
				return new Position(i, j);
			}
		}	
	}
	return null;
}

function newWhiteColor()
{
	return new Color(255, 255, 255);
}

function newBlackColor()
{
	return new Color(0, 0, 0);
}

/**
	returns the color of the canvas context at the given position
	@param pos: the position
	@return: the color at the given position
*/
function imageDataToColor(pos)
{
	return new Color(context.getImageData(pos.x, pos.y, 1, 1).data[0], context.getImageData(pos.x, pos.y, 1, 1).data[1], context.getImageData(pos.x, pos.y, 1, 1).data[2]);
}

/**
Compares two colors.
@return: 1 if equal, else 0.
*/
function colorsEqual(col1, col2)
{
	if(col1.r == col2.r && col1.g == col2.g && col1.b == col2.b)
		return 1;
	return 0;
}