var last_position_of_x,last_position_of_y;
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="navy";
width_of_line=2;
var width=screen.width;
new_width=screen.width-70;
var height=screen.height;
new_height=screen.height-300;
if(width<992)
{
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    console.log("my_touch_start");
    color=document.getElementById("color").value;
    
    width_of_line=document.getElementById("width_of_line").value;

    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
function my_touchmove(e)
{
    console.log("my_touch_move");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last position of x and last position of y=");
    console.log("x= "+last_position_of_x+ " ,y= "+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current_position_of_touch_x and current_position_of_touch_y=");
    console.log("x= "+current_position_of_touch_x+ " ,y= "+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
   
   last_position_of_x=current_position_of_touch_x;
   last_position_of_y=current_position_of_touch_y;
}