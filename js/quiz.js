

let Question = {
    Q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
    A1: "Ahmed",
    A2: "GSG",
    A3: "Asil",
    A4: "Ali",
    RA: "A2"
};
let All_Q_Arr = [
    {
        Q: "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    } ,
    {
        Q: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "7Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "Ahmed",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "9Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "lena",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    },
    {
        Q: "10Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illo repellendus ullam dolor nemo pariatur nam iure laudantium ipsum aliquid.",
        A1: "lena",
        A2: "GSG",
        A3: "Asil",
        A4: "Ali",
        RA: "A2"
    }
];
console.log(localStorage.getItem("username"));
console.log(document.querySelector(".userName h3"));
document.querySelector(".userName h3").textContent = localStorage.getItem("username");
console.log(document.querySelector(".userName h3"));

console.log("hi");
let count = All_Q_Arr.length;
for(let i = 0 ; i< 5 ; i++){
   let ran = Math.floor(Math.random()*(count));
   let Q  = All_Q_Arr[ran].Q;
   let A1 = All_Q_Arr[ran].A1;
   let A2 = All_Q_Arr[ran].A2;
   let A3 = All_Q_Arr[ran].A3;
   let A4 = All_Q_Arr[ran].A4;
   let RA = All_Q_Arr[ran].RA;


   All_Q_Arr[ran].Q  = All_Q_Arr[count-1].Q;
   All_Q_Arr[ran].A1 = All_Q_Arr[count-1].A1;
   All_Q_Arr[ran].A2 = All_Q_Arr[count-1].A2;
   All_Q_Arr[ran].A3 = All_Q_Arr[count-1].A3;
   All_Q_Arr[ran].A4 = All_Q_Arr[count-1].A4;
   All_Q_Arr[ran].RA = All_Q_Arr[count-1].RA;

   All_Q_Arr[count-1].Q = Q;
   All_Q_Arr[count-1].A1 = A1;
   All_Q_Arr[count-1].A2 = A2;
   All_Q_Arr[count-1].A3 = A3;
   All_Q_Arr[count-1].A4 = A4;
   All_Q_Arr[count-1].RA = RA;
   count--;

}
let content = document.querySelector(".mainDiv");
console.log(content);
const q = document.querySelector(".mainDiv p");
const answers = document.querySelectorAll(".mainDiv input[name=Answer]");
let Q_count = 0;
const next = document.querySelector("#submit");
next.addEventListener('click', () => {
    // Q_count++;
    // load(Q_count);
    console.log(answers);
    answers.forEach((e)=>{
        console.log( e.value, e.checked)
    })
})
function load(index){

    q.innerText = All_Q_Arr[index].Q;
    console.log(answers);
};

load(0)
// document.querySelector("h3").textContent = document.querySelector("input").value;

 console.log(history.state)


//  const post = document.querySelector('#submit');
//  post.addEventListener('click', () => {
//     content.innerHTML =`
//     <p>${All_Q_Arr[Q_count].Q}</p>
//     <form action="#">
//        <input type="radio" name="Answer" id="1Answer" value="${All_Q_Arr[Q_count].A1}"> 
//        <label for="1Answer">${All_Q_Arr[Q_count].A1}</label><br>
//        <input type="radio" name="Answer" id="2Answer" value="${All_Q_Arr[Q_count].A2}"> 
//        <label for="2Answer">${All_Q_Arr[Q_count].A2}</label><br>
//        <input type="radio" name="Answer" id="3Answer" value="${All_Q_Arr[Q_count].A3}"> 
//        <label for="3Answer">${All_Q_Arr[Q_count].A3}</label><br>
//        <input type="radio" name="Answer" id="4Answer" value="${All_Q_Arr[Q_count].A4}"> 
//        <label for="1Answer">${All_Q_Arr[Q_count].A4}</label><br>
//         <input type="submit" value="Next" id="submit">
//     </form>
//     `;
//     Q_count++;
//     console.log(document.querySelectorAll("[name=Answer]"));

//  })





//  let input = document.querySelector("#submit");
//  input.addEventListener('click', (e) => {
// // let val =  document.querySelector("input[id=name]").value; 
// // localStorage.setItem("username",val);
// // if(document.getElementById(`${All_Q_Arr[Q_count].A4}`))
// // console.log(All_Q_Arr[9]);
// console.log(document.querySelectorAll("[name=Answer]"));
// });