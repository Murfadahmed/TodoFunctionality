let inputText = document.querySelector('.text')
let inputBtn = document.querySelector('.button')
    let itemList = document.querySelector('.list ul')
    

    
    
    inputBtn.addEventListener('click',(item)=>{
        if(inputText.value != ""){

            item.preventDefault()

            let myItem = document.createElement('li');
            
            console.log(myItem)
            
            myItem.innerHTML = inputText.value;

            itemList.appendChild(myItem)

            const mySpan =  document.createElement('span')
            mySpan.innerHTML = "x"
            console.log(mySpan)
            myItem.appendChild(mySpan)
        } 

         const close = document.querySelectorAll('span')
        // console.log(close)
        for(let i=0; i<close.length ;i++)
        {
            close[i].addEventListener('click',()=>{
                // console.log(i)
                console.log(close[i])
                close[i].parentElement.style.display ="none"
            })
        }
        inputText.value = ""
    })