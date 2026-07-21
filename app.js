const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const enchance = id => {

    const element = document.getElementById('type-child'),

    text = element.innerText.split('');
    element.innerHTML = '';

    text.forEach(letter => {

        const span = document.createElement('span');

        span.className = 'letter';
        span.innerText = letter;

        element.appendChild(span);
});
    
}

enchance('type-child');