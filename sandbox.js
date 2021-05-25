const form = document.querySelector('.form-details');
const heading = document.querySelector('.heading h1')
// const login = document.querySelector('.login');
// const home = document.querySelector('.home');
// const container = document.querySelector('.container');
// const matter = document.querySelector('.matter');
const custcount = document.querySelector('.custcount span'); 
// const maincust = document.querySelector('.custcount');
// let username = form.email
// const pattern = /^ . {6,} $/


// login.addEventListener('click', () => {
//     form.style.display = 'block';
//     maincust.style.display = 'none';
//     container.style.display = 'none';
//     matter.style.display = 'none';
    
// });


// home.addEventListener('click', () => {
//     maincust.style.display = 'block';
//     matter.style.display = 'block';
//     form.style.display = 'none';
//     container.innerHTML
//     container.setAttribute('id', 'container2')
    
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(form.name.value);
    heading.textContent = "Hello " + form.name.value
    form.name.value = ""
    form.email.value = ""
    login.textContent = 'Logged In'
});

let count = 0;
const cust = setInterval(() => {
    custcount.textContent = count;
    if(count === 3000){
        clearInterval(cust)
    }
    else{
        count += 100;
    }
},100);
