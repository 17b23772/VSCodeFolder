const divs = document.querySelectorAll('.gridItem');
Array.from(divs).forEach(div =>{
    div.addEventListener('click', classToggler);
});

const colors = ['.lake', '.tree'];
let enumerator = 0;

function classToggler() {
    if (enumerator < colors.length +1) {
        enumerator += 1; 
    }
    else {enumerator = 0};
this.classList.add (colors[enumerator]);
this.classList.remove (colors[enumerator-1]);
}
