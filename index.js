document.querySelector('#stopButton').addEventListener('click', function() {
  document.querySelector('#stopLight').classList.toggle('stop');
});

document.querySelector('#slowButton').addEventListener('click', function() {
  document.querySelector('#slowLight').classList.toggle('slow');
});

document.querySelector('#goButton').addEventListener('click', function(){
  document.querySelector('#goLight').classList.toggle('go');
});

// document.querySelector('#stopButton').addEventListener('mouseenter', function(event){
//   console.log("Entered " + event.target.textContent + " button");
// });
//
// document.querySelector('#stopButton').addEventListener('mouseleave', function(event){
//   console.log("Left " + event.target.textContent + " button");
// });
//
// document.querySelector('#slowButton').addEventListener('mouseenter', function(event){
//   console.log("Entered " + event.target.textContent + " button");
// });
//
// document.querySelector('#slowButton').addEventListener('mouseleave', function(event){
//   console.log("Left " + event.target.textContent + " button");
// });
//
// document.querySelector('#goButton').addEventListener('mouseenter', function(event){
//   console.log("Entered " + event.target.textContent + " button");
// });
//
// document.querySelector('#goButton').addEventListener('mouseleave', function(event){
//   console.log("Left " + event.target.textContent + " button");
// });

document.querySelector('#stopButton').addEventListener('click', function(event) {
console.log(event.target.textContent + " bulb on");
});

document.querySelector('#stopButton').addEventListener('click', function(event) {
console.log(event.target.textContent + " bulb off");
});

document.querySelector('#slowButton').addEventListener('click', function(event) {
console.log(event.target.textContent + " bulb on");
});

document.querySelector('#slowButton').addEventListener('click', function(event) {
console.log(event.target.textContent + " bulb off");
});

document.querySelector('#goButton').addEventListener('click', function(event){
console.log(event.target.textContent + " bulb on");
});

document.querySelector('#goButton').addEventListener('click', function(event){
console.log(event.target.textContent + " bulb off");
});
