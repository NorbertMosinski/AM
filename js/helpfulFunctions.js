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
Looks for a specific color in a line of the canvas context. If the start- and endposition are not in the same line, the function will be useless.
@param posBegin: the start position
@param posEnd: the end position
@param color: the color the function will be looking for
@param context: the canvas context containing the drawn image 
@return: the position of the color if found, null if not
*/
function findColorInLine(posBegin, posEnd, color, context)
{
	for(i = posBegin.x; i <= posEnd.x; i++)
	{
		for(j = posBegin.y; j <= posEnd.y; j++)
		{
			if(posEnd.y != 0)
				//console.log("(" + i + "," + j + ")" + "r: " + context.getImageData(i, j, 1, 1).data[0] + " g:" + context.getImageData(i, j, 1, 1).data[1] + " b: " + context.getImageData(i, j, 1, 1).data[2]);
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

/**
	returns the color of the canvas context at the given position
	@param pos: the position
	@param context: the canvas context
	@return: the color at the given position
*/
function imageDataToColor(pos, context)
{
	return new Color(context.getImageData(pos.x, pos.y, 1, 1).data[0], context.getImageData(pos.x, pos.y, 1, 1).data[1], context.getImageData(pos.x, pos.y, 1, 1).data[2]);
}

/**
Compares two colors.
@param col1: first color to be compared
@param col2: second color to be compared
@return: true if equal, else false.
*/
function colorsEqual(col1, col2)
{
	if(col1.r == col2.r && col1.g == col2.g && col1.b == col2.b)
		return true;
	return false;
}

/**
Compares two positions.
@param pos1: first position to be compared
@param pos2: second color to be compared
@return: true if equal, else false.
*/
function positionsEqual(pos1, pos2)
{
	if(pos1.x == pos2.x)
		if(pos1.y == pos2.y)
			return true;

	return false;
}

/**
Drawns an image on the given canvas context. Als sets the needed options.
@param src: the source of the image
@param context: the context of the canvas
*/
function drawImageOnCanvas(src, context)
{
	//initialize context of canvas
	context.canvas.width = src.width;
	context.canvas.height = src.height;

	//draw the image on canvas	
	context.drawImage(src, 0, 0, src.width, src.height);
}

/**
Looks for the button that matches the id.
@param id: the id of the button
@return: the button if found, else null
*/
function getButton(id)
{
	for(i in buttons)
		if(buttons[i].id == id)
			return buttons[i];
	return null;
}

/**
This function realizes a timer
@param duration: The timer duration
@param display: the content where the timer will be displayed
*/
function startTimer(duration, display) 
{
    var timer = duration, minutes, seconds;
    setInterval(function () 
    {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) 
        {
            timer = 0;
            getButton("P13_boton_lose").click();
        }
    }, 1000);
}
