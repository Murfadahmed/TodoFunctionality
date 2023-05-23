    let inputText = document.querySelector('.text')
    let inputBtn = document.querySelector('.button')
    let itemList = document.querySelector('.list ul')


    
    
    inputBtn.addEventListener('click',(item)=>{
        if(inputText != ""){

            item.preventDefault()

            let myItem = document.createElement('li');

            console.log(myItem)

            myItem.innerHTML = inputText.value;

            itemList.appendChild(myItem)

            const mySpan =  document.querySelector('.list span')
            mySpan.innerHTML = "x"
            console.log(mySpan)
            myItem.appendChild(mySpan)
        } 

    })