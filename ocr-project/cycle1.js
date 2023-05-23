const divs = document.querySelectorAll('.gridItem');
Array.from(divs).forEach(div =>{
    div.addEventListener('click', classToggler);
});

const colors = []
