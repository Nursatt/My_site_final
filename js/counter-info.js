let items = document.querySelectorAll('.info-item p')
items.forEach(item => {
    item.innerHTML = 0
    let endValue = item.getAttribute('data-num')
    console.log(endValue);
    let increament = endValue/20
    function changeNumber(){
        let value = parseInt(item.innerHTML)
        if(value < endValue){
            value += Math.round(increament)
            item.innerHTML = value  
            setTimeout(changeNumber,100)
        }
        else{
            item.innerHTML = endValue
        }
    }
    changeNumber()
})