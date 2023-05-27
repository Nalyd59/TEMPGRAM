let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let btn_carre = document.getElementById("carre");
let btn_chat = document.getElementById("chat");
let btn_canard = document.getElementById("canard");
let desordre = document.getElementById("desordre");

btn_carre.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(350, 150);
  ctx.lineTo(250, 250);
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(350, 350);
  ctx.lineTo(350, 150);
  ctx.lineTo(250, 250);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 350);
  ctx.lineTo(250, 350);
  ctx.lineTo(150, 250);
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(250, 350);
  ctx.lineTo(350, 350);
  ctx.lineTo(300, 300);
  ctx.fillStyle = "grey";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(200, 200);
  ctx.lineTo(200, 300);
  ctx.lineTo(150, 250);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(250, 250);
  ctx.lineTo(200, 300);
  ctx.fillStyle = "brown ";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(250, 250);
  ctx.lineTo(300, 300);
  ctx.lineTo(250, 350);
  ctx.lineTo(200, 300);
  ctx.fillStyle = "orange";
  ctx.fill();
});

btn_chat.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(150, 350);
  ctx.lineTo(350, 350);
  ctx.lineTo(250, 250);
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(350, 350);
  ctx.lineTo(350, 150);
  ctx.lineTo(250, 250);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(350, 350);
  ctx.lineTo(450, 350);
  ctx.lineTo(400, 300);
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(350, 50);
  ctx.lineTo(400, 0);
  ctx.lineTo(400, 100);
  ctx.fillStyle = "grey";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(50, 250);
  ctx.lineTo(100, 250);
  ctx.lineTo(150, 350);
  ctx.lineTo(100, 350);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(350, 50);
  ctx.lineTo(300, 100);
  ctx.fillStyle = "brown ";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(350, 50);
  ctx.lineTo(400, 100);
  ctx.lineTo(350, 150);
  ctx.lineTo(300, 100);
  ctx.fillStyle = "orange";
  ctx.fill();
});

btn_canard.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.lineTo(200, 400);
    ctx.fillStyle = "red";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(200, 400);
    ctx.lineTo(400, 400);
    ctx.fillStyle = "yellow";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(200, 150);
    ctx.lineTo(150, 100);
    ctx.fillStyle = "green";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(350, 400);
    ctx.lineTo(350, 500);
    ctx.lineTo(300, 450);
    ctx.fillStyle = "grey";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(150, 300);
    ctx.fillStyle = "blue";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(200, 450);
    ctx.lineTo(250, 400);
    ctx.lineTo(250, 500);
    ctx.fillStyle = "brown ";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 150);
    ctx.lineTo(150, 150);
    ctx.fillStyle = "orange";
    ctx.fill();
});

desordre.addEventListener("click", () => {
    /*
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(100, 150);
    ctx.lineTo(250, 250);
    ctx.fillStyle = "red";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 150);
    ctx.lineTo(250, 250);
    ctx.fillStyle = "yellow";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(150, 350);
    ctx.lineTo(250, 350);
    ctx.lineTo(150, 250);
    ctx.fillStyle = "green";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(250, 350);
    ctx.lineTo(350, 350);
    ctx.lineTo(300, 300);
    ctx.fillStyle = "grey";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 300);
    ctx.lineTo(150, 250);
    ctx.fillStyle = "blue";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(250, 250);
    ctx.lineTo(200, 300);
    ctx.fillStyle = "brown ";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(300, 300);
    ctx.lineTo(250, 350);
    ctx.lineTo(200, 300);
    ctx.fillStyle = "orange";
    ctx.fill();*/
  });
