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

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
});