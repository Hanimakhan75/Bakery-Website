let oder_popup=document.getElementsByClassName('oder_popup')
let cake_form=document.getElementById("cake_form")
let cancel_btn=document.getElementById('cancel_btn')
let cnt_cart=document.getElementsByClassName('cnt_cart')
let add_cart=document.getElementsByClassName('add_cart')
let pop_cart=document.getElementById('pop_cart')
let okay=document.getElementById('okay')

for(let pop of oder_popup)
    pop.addEventListener('click',()=>{
    cake_form.style.display='block'
})
cancel_btn.addEventListener('click',()=>{
    cake_form.style.display='none'
})

for (let cart of add_cart)
    cart.addEventListener('click',()=>{
        pop_cart.style.display='block'

})
okay.addEventListener('click',()=>{
    pop_cart.style.display='none'
})