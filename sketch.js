let i = 0;
let count = 1;
let x, y, dx, dy, maxI, t, X, Y;

function setup() {
  createCanvas(400, 400);
  background(220);
  X = width;
  Y = height;
  x = y = dx = 0;
  dy = -1;
  t = Math.max(X/3, Y/3);
  maxI = t * t;
  stroke(0);
}

function draw() {
  if(i < maxI){
    if ((-X / 2 <= x) && (x <= X / 2) && (-Y / 2 <= y) && (y <= Y / 2)) {
      if(isPrime(i)){
        fill(0, 255, 255);  
      }else{
        fill(0);
      }
      rect(x*3 + X/2, y*3 + Y/2, 3, 3);
    }
    if ((x == y) || ((x < 0) && (x == -y)) || ((x > 0) && (x == 1 - y))) {
      t = dx;
      dx = -dy;
      dy = t;
    }
    x += dx;
    y += dy;
    i++;
  }
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
