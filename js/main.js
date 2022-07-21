let post = document.querySelector("#start");
post.addEventListener('click', (e) => {
// e.preventDefault();
let val =  document.querySelector("input[id=name]").value; 
console.log(val + " =  val");
// window.history.pushState(val, '', "/quiz.html");
localStorage.setItem("username",val);
localStorage.setItem("score", 0);
console.log("sssss")
});