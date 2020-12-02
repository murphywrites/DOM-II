// Your code goes here

// // prevent default to keep nav-links from refreshing page
const navLinks = document.querySelector('a'); 
navLinks.addEventListener('click', (e) => {
    e.preventDefault();
})


// dbl click on bus image to reset the filter
busImg = document.querySelector('img')
busImg.addEventListener('dblclick', (e) =>{
    busImg.style.filter = 'hue-rotate(-45deg)';
    e.stopPropagation() //event propagation control so that dbl clicking on image doesn't invoke "dark mode
}, {capture: true})


// 10. scroll to change filter on main bus image
window.addEventListener('scroll', (e) => {
    busImg.style.filter = 'hue-rotate(45deg)';
})

// 9. load page to show feature list
window.addEventListener('load', (e) => {
    const featureMsg = document.querySelector(".modal h4")
    const normalMsg = featureMsg.innerHTML;
    const popUp = document.querySelector('.modal')
    featureMsg.innerHTML = 
    "Feature List <br> 1. Mouseover/Mouseleave feature images <br> 2. Move bus emoji to different links on 'focus', return to previous state on 'blur' <br> 3. double click to change to dark mode <br> 4. Hit the Esc key to switch to 'Island Mode 😎' <br> 5. Scroll down to change the filter on the Bus Image (double click it to change it back) <br> <br> (Now, click anywhere to get to the site!)"
    popUp.classList.remove('off')
    
    // 8. click to get out of Feature List
    window.addEventListener('click', (e) => {
        const popUp = document.querySelector('.modal')
        popUp.classList.add('off');
    featureMsg.innerHTML = normalMsg;
    featureMsg.style.textAlign = 'center';
    })
    
})


// 7. resize and display "Fun Bus - transforming your travel experience"

window.addEventListener('resize', (e) => {
    const resizeMsg = document.querySelector('.modal')
    console.log('resize')
    resizeMsg.classList.remove('off')
   setTimeout((e) => {
    resizeMsg.classList.add('off')
   }, 3000)
 ;
}, { once: true })

// 6. 'keydown' Esc key to change to island mode

document.addEventListener('keydown', function (e) {
    // if the event object contains the key 'escape', kill modal
    if (e.code === "Escape") { 
    const wholeSite = document.querySelector('body');
    const header = document.querySelector('header')
    const nav = document.querySelectorAll('a')
    wholeSite.classList.toggle("island-mode")
    header.classList.toggle("island-mode")
    nav.forEach((item) => {
        item.classList.toggle("island-mode");
    })
}
})


// 5. double click to change modes

document.addEventListener('dblclick', (e) => {
    const wholeSite = document.querySelector('body');
    const header = document.querySelector('header')
    const nav = document.querySelectorAll('a')
    wholeSite.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode")
    nav.forEach((item) => {
        item.classList.toggle("dark-mode")
    })

})

// 3+4 Move bus emoji to different links on 'focus', return to previous state on 'blur'

const funBus = "🚌"
const links = document.querySelectorAll("a");

Array.from(links).forEach((item) => {
    item.addEventListener('blur', (e) => {
        item.textContent = item.textContent.slice(0, -2 );
    })
    item.addEventListener('focus', (e) => {
        
        item.textContent = `${item.textContent} ${funBus}`  
    })
    
})

// 1+2 Mouseover/Mouseleave feature images

const funInSun = document.querySelector(".destination");
const mtnExc = funInSun.nextElementSibling;
const islGet = mtnExc.nextElementSibling;

funInSun.addEventListener('mouseover', (e) => {
funInSun.style.backgroundImage = "url(https://images.unsplash.com/photo-1529919367619-8be6a208160f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuJTIwaW4lMjB0aGUlMjBzdW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)";
funInSun.children[0].style.color = 'white';
funInSun.children[1].style.color = 'white';

})

funInSun.addEventListener('mouseleave', (e) => {
    funInSun.style.backgroundImage = "";
    funInSun.children[0].style.color = ''
funInSun.children[1].style.color = ''
})

mtnExc.addEventListener('mouseover', (e) => {
mtnExc.style.backgroundImage = "url(https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60)";
mtnExc.children[0].style.color = 'white';
mtnExc.children[1].style.color = 'white';

})

mtnExc.addEventListener('mouseleave', (e) => {
    mtnExc.style.backgroundImage = "";
    mtnExc.children[0].style.color = ''
mtnExc.children[1].style.color = ''
})

islGet.addEventListener('mouseover', (e) => {
    islGet.style.backgroundImage = "url(https://images.unsplash.com/photo-1533977397732-47222b2dd81f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGlzbGFuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)";
    // islGet.style.backgroundRepeat = "no-repeat";
    islGet.style.backgroundAttachment = "fixed";
    islGet.style.backgroundPosition = "right";
    islGet.children[0].style.color = "lightblue";
    islGet.children[1].style.color = "lightblue";  })
    
    islGet.addEventListener('mouseleave', (e) => {
        islGet.style.backgroundImage = "";
        islGet.children[0].style.color = ''
    islGet.children[1].style.color = ''
    })