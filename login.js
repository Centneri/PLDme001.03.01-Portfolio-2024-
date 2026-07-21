const form = document.getElementById("form");
// name
const name = document.getElementById("Name");
const nrr = document.getElementById("nrr");
let reg2 = /^[A-Za-z]*([A-Za-z]|[A-Za-z])[A-Za-z]*$/i;
// email
const email = document.getElementById("email");
const err = document.getElementById("err");
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;
// pass
const pass = document.getElementById("pass");
const prr = document.getElementById("prr");
// pass*
const passAG = document.getElementById('passAG');
const aprr = document.getElementById('aprr')


form.addEventListener("submit", (e) => {
  if (!email.value.match(reg)) {
    e.preventDefault();
    err.innerHTML = "Enter Valid Email";
    err.style.color = "red";
  }
  if (pass.value.length <= 5) {
    e.preventDefault();
    prr.innerHTML = "Password is Incorrect";
    prr.style.color = "red";
  }
});

let availableKeywords = [
    'HTML',
    'CSS',
    'Javascript',
    'Python',
    'Java',
    'Bash',
    'SQL',
    'PHP',
    'Lua',
    'Ruby',
    'R Project',
    'Julia',
    'TypeScript',
    'C sharp',
    'Kotlin',
    'Swift',
    'Dart',
    'Go',
    'Haskell',
    'F#',
    'Scala',
    'OCaml',
    'Elixir',
    'ELM',
    'Clojure',
];
  
const resultBox = document.querySelector('.fill-result');
const inputBox = document.getElementById('input-box');
  
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if (input.length) {
      result = availableKeywords.filter((keyword) => {
        return  keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);
  
    if (!result.length) {
      resultBox.innerHTML = '';
    }
  }
  
  function display(result) {
    const content = result.map((list) => {
      return '<li onclick=selectInput(this)>' + list + '</li>';
    })
    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>'
  }
  
  function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}

function myFunctionc() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

