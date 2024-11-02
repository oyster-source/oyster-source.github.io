
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0 ) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createpoo(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
        }
    }   
)

const createpoo = (e) => {
    const poo = document.createElement('i')
    poo.classList.add('fas')
    poo.classList.add('fa-poo')

    const x = e.clientX
    const y = e.clientY

 

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

   
    poo.style.top = `${yInside}px`
    poo.style.left = `${xInside}px`

 

    loveMe.appendChild(poo)

    times.innerHTML = ++timesClicked

    setTimeout(() => poo.remove(), 16000)
}