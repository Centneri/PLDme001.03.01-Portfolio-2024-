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
  if (name.value === "" || name.value == null || !name.value.match(reg2)){
    e.preventDefault();
    nrr.innerHTML = "Enter Valid Username";
    nrr.style.color = "red";
  } else {
    nrr.innerHTML = "";
  }
  if (!email.value.match(reg)) {
    e.preventDefault();
    err.innerHTML = "Enter Valid Email";
    err.style.color = "red";
  } else if (email.value.match(reg)){
    err.innerHTML = "";
  }
  if (pass.value.length <= 4) {
    e.preventDefault();
    prr.innerHTML = "Password is Incorrect";
    prr.style.color = "red";
  }
  if (passAG.value != pass.value) {
    aprr.innerHTML = "Make sure Passwords match";
    aprr.style.color = "red";
  } else if (passAG.value = pass.value) {
    aprr.innerHTML = "";
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
    'OCaml'
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

function myFunctiona() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunctionb() {
  var x = document.getElementById("passAG");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// const myBurg = document.getElementById('myBurg');
// const myBurger = document.getElementById('myBurger');

// myBurg.addEventListener('click', p => {
//     myBurger.style.display = 'block';
// });

// myBurg.addEventListener('click', p => {
//     myBurger.style.display = 'none';
// })