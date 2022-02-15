var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="navy";
width_of_line=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
   current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
   current_position_of_mouse_y=e.clientY-canvas.offsetTop;

   if(mouseEvent=="mousedown")
   {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last position of x and last position of y=");
    console.log("x= "+last_position_of_x+ " ,y= "+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current_position_of_mouse_x and current_position_of_mouse_y=");
    console.log("x= "+current_position_of_mouse_x+ " ,y= "+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
   }
   last_position_of_x=current_position_of_mouse_x;
   last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    
    mouseEvent="mouseleave";
}


function clear_area()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}