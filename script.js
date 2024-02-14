let h = document.querySelector('h1')
let d = document.querySelector('.container')
let ctxt = document.querySelector('.context')
let inp = document.querySelector('input')

// keypress, keydown, keyup 
// inp.addEventListener('keypress',(e)=>{
//     console.log(e);
// })

window.addEventListener('keydown',(e)=>{
    // e.preventDefault()
    if(e.ctrlKey && e.shiftKey && e.key === 'H' ){
         console.log(e);
        inp.focus()
        ctxt.classList.add('contextActive')      
     }
    console.log(e);
})

inp.addEventListener('input', (e)=>{
    if(e.target.value === '1234 56'){
        ctxt.classList.remove('contextActive')
    }
})

let cripto = [
  'q','w', 'e','r','t',       
  'y','u', 'i','o','p',
  'a','s','d','f','g',
  'h','j','k','l','z',
  'x','c','v','b','n',
  'm',
]
