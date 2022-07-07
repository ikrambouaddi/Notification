const info =document.getElementById('info')
const container =document.getElementById('container')


info.addEventListener('click',() =>{
    creatNotifiqution();
})

function creatNotifiqution(){
    const infoEl =document.createElement('div')
    infoEl.classList.add('toast')
    infoEl.innerHTML= 'this maesages is bad' 

    container.append(infoEl)

    setTimeout(() => {
        infoEl.remove()
    }, 3000);
}