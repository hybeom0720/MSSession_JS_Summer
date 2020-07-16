const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const children = document.querySelectorAll('.child');
const son = document.querySelector("#son");
const father = document.createElement('p');
const title = document.querySelector(".title");
const button = document.querySelector("button");
const changedLetter = document.querySelector(".changedLetter");
const experiment3 = document.querySelector(".experiment3");
const ex3Button = document.querySelectorAll("button");
const experiment4 = document.querySelector(".experiment4");
const result = experiment4.querySelector("#result");
const input = experiment4.querySelector("#input");
const experiment5 = document.querySelector(".experiment5");
const result2= experiment5.querySelector("#result");
const input2 = experiment5.querySelector("#input");

father.textContent = '저도 자식입니다아';


children.forEach(child=>{
    child.classList.add('red');
})
console.log(typeof(children));

console.log("innerHTML", son.innerHTML);
console.log("innerText", son.innerText);
console.log("textContent", son.textContent); //the desirable foam

father.setAttribute('id', 'parent');
father.setAttribute('class', 'child');
parent.appendChild(father);

title.addEventListener('mouseover',event => {
    event.target.style.color = "red";
}); 

title.addEventListener('mouseout',event => {
    event.target.style.color = "black";
});
//EventTarget.addEventListener('event', callback fuction)
console.dir(title)

button.addEventListener('click', event =>{
    changedLetter.textContent = "겁나 어려운데요?";
});

ex3Button.forEach(child=>{
    child.addEventListener('click', event =>{
        child.textContent = "짜잔";
    })
});

input.addEventListener('keyup',function(event){
    //console.log(event);
    //console.log(event.target.value);
    if (event.key === "Enter"){
    result.textContent = event.target.value;
    }
})
// const keySet = ["Enter", "Alt", "Control", "Shift"];
input2.addEventListener('keyup', event => {
    const keySet = ["Enter", "Alt", "Control", "Shift"];
    keySet.forEach(keyChild=>{
        if (event.key === keyChild){
            result2.textContent = keyChild + "눌렀습니다."
        }
    })
})
// 위의 것이 조금 더 바람직한 함수 정의 방법!
// keySet.forEach(keyChild=>{
//     input2.addEventListener('keyup', function(event){
//         if (event.key === keyChild){
//             result2.textContent = keyChild + "눌렀습니다";
//         }
//     })
// })

/* function onClick(){
    this.textContent  "짜잔";
}*/
//parent.insertBefore(father,son) what we put and where we loacte it in front of

//myAnswer1
// for (let i=0;child.length-1;i++){
//     child[i].classList.add('red');
// }
// For each -> rotating the array
// Case1
// const son = document.querySelector('#son');
// const daughter = document.querySelector('#daughter');

// son.classList.add('red');
// daughter.classList.add('red');
// console.log(document);
// console.dir(document);