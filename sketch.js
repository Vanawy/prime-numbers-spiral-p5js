let i = 0;
let count = 1;
let pos, direction;

function setup() {
  createCanvas(400, 400);
  background(220);
  pos = createVector(width/2, height/2);
  direction = createVector(1, 0);
}

function draw() {
  if(isPrime(i)){
    stroke("red");  
  }else{
    stroke(0);
  }
  point(i % width, Math.floor(i / width));
  i++;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}