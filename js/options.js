//Tolerance by finding the beginning and end of the labirynth. 0.1 = 10% of image height
const OPT_MAZE_INITTOLERANCE = 0.1;
//Number of steps to be done when moving the person
const OPT_GAME_STEPS = 4;
//Time limit for each level (min)
const OPT_GAME_TIMELIMIT = 4;
//Person size x*x in px
const OPT_PERSON_SIZE = 5;
/*
//Canvas width
const OPT_CANVAS_WIDTH = ;
//Canvas height
const OPT_CANVAS_HEIGHT = ;
*/

//Top direction
const CONST_POS_TOP = new Position(0, -1);
//Bot direction
const CONST_POS_BOT = new Position(0, 1);
//Left direction
const CONST_POS_LEFT = new Position(-1, 0);
//Right direction
const CONST_POS_RIGHT = new Position(1, 0);
//White color
const CONST_COL_WHITE = new Color(255, 255, 255);
//Black color
const CONST_COL_BLACK = new Color(0, 0, 0);