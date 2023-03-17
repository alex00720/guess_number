const EnterNumber = document.querySelector(".enter");
const Gueesedbox = document.querySelector(".guessedbox");
const InputNumber = document.getElementById("number");
const outputArea = document.getElementById("output");
let num = 1;
let count = 5;
let RandomNumber = Math.floor(Math.random()*101); //設定亂數
console.log(RandomNumber);

const H1 = document.getElementById("starnumber");
const H2 = document.getElementById("count");

function TextArea(){
    if(InputNumber.value){
        let text = num + "." + InputNumber.value;
        outputArea.value += text + '\n';
        num ++; 
        Judgenumber();
        count--;
        H2.textContent = '只剩'+ count + '次機會';  //h2標籤的內容更改
        if(count == 0){
            H2.textContent = '挑戰失敗';  //h2標籤的內容更改
            EnterNumber.disabled = true; //按鈕設定不可使用
        };
    }
}

function Judgenumber(){
   if(InputNumber.value == RandomNumber){
    H1.textContent = '恭喜答對!!';
    EnterNumber.disabled = true;
   }
   else if(InputNumber.value >= RandomNumber){
    H1.textContent = '猜小一點';
   }
   else{
    H1.textContent = '猜大一點';
   }
}

EnterNumber.addEventListener("click",TextArea);