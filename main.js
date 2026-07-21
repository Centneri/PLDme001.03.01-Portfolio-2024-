// const left = document.getElementById("left-side");

// const handleMove = e => {
//   left.style.width = `${e.clientX / window.innerWidth * 100}%`;
// }

// document.onmousemove = e => handleMove(e);

// document.ontouchmove = e => handleMove(e.touches[0]);

const handeOnMouseMove = e => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
  x = e.clientX - rect.left, 
  y = e.clientY - rect.top;

  target.style.setProperty('--mouse-x', `${x}px`);
  target.style.setProperty('--mouse-y', `${y}px`);
}

for(const card of document.querySelectorAll('.card-child')) {
  card.onmousemove = e => handeOnMouseMove(e);

}

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


// const myCategory = document.getElementById('myCategory');
// const myDrop = document.getElementById('myDrop');

// function myDropper(event) {
//   event.target.style.display = 'none';
// }

// myCategory.addEventListener('onmouseover', myDropper);


// const handeOnMouseMove2 = e => {
//   const { currentTarget: target } = e;

//   const rect = target.getBoundingClientRect(),
//   x = e.clientX - rect.left, 
//   y = e.clientY - rect.top;

//   target.style.setProperty('--mouse-x', `${x}px`);
//   target.style.setProperty('--mouse-y', `${y}px`);
// }

// for(const card of document.querySelectorAll('.type-childer')) {
//   card.onmousemove = e => handeOnMouseMove2(e);
  
// }

// const enchance = id => {
//   const element = document.getElementById('type-child'),
//   text = element.innerText.split('');
//   element.innerHTML = '';
//   text.forEach(letter => {
//       const span = document.createElement('span');
//       span.className = 'letter';
//       span.innerText = letter;
//       element.appendChild(span);
// });
  
// }

// enchance('type-child');

// const enchance2 = id => {
//   const element = document.getElementById('type-child2'),
//   text = element.innerText.split('');
//   element.innerHTML = '';
//   text.forEach(letter => {
//       const span = document.createElement('span');
//       span.className = 'letter';
//       span.innerText = letter;
//       element.appendChild(span);
// });
  
// }

// enchance2('type-child');

// const enchance3 = id => {
//   const element = document.getElementById('type-child3'),
//   text = element.innerText.split('');
//   element.innerHTML = '';
//   text.forEach(letter => {
//       const span = document.createElement('span');
//       span.className = 'letter';
//       span.innerText = letter;
//       element.appendChild(span);
// });
  
// }

// enchance3('type-child');

// const enchance4 = id => {
//   const element = document.getElementById('type-child4'),
//   text = element.innerText.split('');
//   element.innerHTML = '';
//   text.forEach(letter => {
//       const span = document.createElement('span');
//       span.className = 'letter';
//       span.innerText = letter;
//       element.appendChild(span);
// });
  
// }

// enchance4('type-child');