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

  
const track = document.getElementById('langTrack');

window.onmouseup = () => {
  track.dataset.mouseDownAt = '0';
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
  if (track.dataset.mouseDownAt === '0') return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
  parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = 
  Math.max(Math.min(nextPercentageUnconstrained, 0),
  -96.2);


  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, {duration: 1200, fill:'forwards'});

  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -10);

  for(const svg of track.getElementsByClassName('svg')) {
    svg.style.objectPosition = `${nextPercentage} 40%`;
  }
  for(const image of track.getElementsByClassName('image')) {
    image.style.objectPosition = `${nextPercentage} 40%`;
  }
}
