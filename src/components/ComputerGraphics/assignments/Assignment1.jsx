import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

const Assignment1 = (props) => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    context = canvas.getContext("2d");

    let p0 = {
        x: 0,
        y: 0
    };
    let p1 = {
        x: 0,
        y: 0
    };
  
    let isdown = 0;
  
    display();
  
    function setPixel(x, y) {
      if(context)
        context.fillRect(x, y, 1, 1);
    }
  
    function handleMouseUp(event) {
        isdown = 0;
        p1.x = event.clientX - canvas.offsetLeft;
        p1.y = event.clientY - canvas.offsetTop;
        display();
    }
  
    function handleMouseDown(event) {
        isdown = 1;
        p0.x = event.clientX - canvas.offsetLeft;
        p0.y = event.clientY - canvas.offsetTop;
        display();
  
    }
  
    function handleMouseMove(event){
        if (isdown === 0)
            return;
  
        p1.x = event.clientX - canvas.offsetLeft;
        p1.y = event.clientY - canvas.offsetTop;
  
        display();
    }
  
    function bresenham(p0, p1) {
        let x1 = p0.x;
        let y1 = p0.y;
        let x2 = p1.x;
        let y2 = p1.y;
  
  
        if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
  
            let this_loop = 0;
            if (x1 > x2){
                this_loop = 1;
            }
  
            let yi = 1;
            if (this_loop === 1){                        
  
                let deltaX = x1 - x2;
                let deltaY = y1 - y2;
                if (deltaY > 0){
                    document.getElementById("quadrant").innerHTML =  'Octant 5';
                }
                else{
                    document.getElementById("quadrant").innerHTML =  'Octant 4';
                }
  
                if (deltaY < 0){
                    yi = -1;
                    deltaY = -1*deltaY;
                }
                let D = 2 * deltaY - deltaX;
                let y = y2;
  
                for (let x = x2; x <= x1; x++) {
                    setPixel(x, y);
                    if( D > 0){
                        y = y + yi;
                        D = D - 2*deltaX;
                    }
                    D = D + 2*deltaY;
                }
  
            }
            else {
                let deltaX = x2 - x1;
                let deltaY = y2 - y1;
                if (deltaY > 0){
                    document.getElementById("quadrant").innerHTML =  'Octant 1';
                }
                else{
                    document.getElementById("quadrant").innerHTML =  'Octant 8';
                }
  
                if (deltaY < 0){
                    yi = -1;
                    deltaY = -1*deltaY;
                }
                let D = 2 * deltaY - deltaX;
                let y = y1;
  
                for (let x = x1; x <= x2; x++) {
                    setPixel(x, y);
                    if( D > 0){
                        y = y + yi;
                        D = D - 2*deltaX;
                    }
                    D = D + 2*deltaY;
                }
  
            }
        }
        else {
            let this_loop = 0;
            if (y1 > y2){
                this_loop = 1;
            }
            let xi = 1;
            if (this_loop === 1){
  
                let deltaX = x1 - x2;
                let deltaY = y1 - y2;
                if (deltaX > 0){
                    document.getElementById("quadrant").innerHTML =  'Octant 6';
                }
                else{
                    document.getElementById("quadrant").innerHTML =  'Octant 7';
                }
  
                if (deltaX < 0){
                    xi = -1;
                    deltaX = -1*deltaX;
                }
                let D = 2 * deltaX - deltaY;
                let x = x2;
  
                for (let y = y2; y <= y1; y++) {
                    setPixel(x, y);
                    if( D > 0){
                        x = x + xi;
                        D = D - 2*deltaY;
                    }
                    D = D + 2*deltaX;
                }
  
            }
            else{
                let deltaX = x2 - x1;
                let deltaY = y2 - y1;
                if (deltaX < 0){
                    document.getElementById("quadrant").innerHTML =  'Octant 3';
                }
                else{
                    document.getElementById("quadrant").innerHTML =  'Octant 2';
                }
  
                if (deltaX < 0){
                    xi = -1;
                    deltaX = -1*deltaX;
                }
                let D = 2 * deltaX - deltaY;
                let x = x1;
  
                for (let y = y1; y <= y2; y++) {
                    setPixel(x, y);
                    if( D > 0){
                        x = x + xi;
                        D = D - 2*deltaY;
                    }
                    D = D + 2*deltaX;
  
                }
                
            }
  
                
        }
  
    }
  
  
  
    function display() {
        context.clearRect(0, 0, canvas.width, canvas.height);
  
        // let dx = p1.x - p0.x;
        // let dy = p1.y - p0.y;
  
        context.fillStyle = "#FF0000";
        context.strokeStyle = "#FF0000";
  
        bresenham(p0, p1);
  
        context.fillStyle = "#0000FF";
        context.strokeStyle = "#0000FF";
  
    }
  });

  return (
    <>
    <Container>
      <canvas id="canvas" width="500" height="500" style={{border: "1px solid black"}}></canvas>
      <p id='quadrant'></p>
    </Container>
    </>
  );
};

export default Assignment1;