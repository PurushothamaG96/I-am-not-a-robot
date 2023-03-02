let count = 0
let outsideCount = 0
let tigers = document.querySelector("#buttons")

debugger
let container = document.querySelector(".container")

const btn = document.createElement("button")
btn.classList.add("reset")

const verify =  document.createElement("button")
verify.classList.add("verifyBtn")
 debugger
let all = document.getElementsByTagName("img") 

btn.addEventListener("click", resetFunc)
function resetFunc(){
    count = 0
    btn.remove()
    img1.style.border="None"
    img2.style.border="None"
    img3.style.border="None"
    img4.style.border="None"
    img5.style.border="None"
    img6.style.border="None"
    verify.remove()
}


verify.addEventListener("click", verifyFunc)
function verifyFunc(){

    count = 0
    if(fig1 > 0 && fig2 > 0){
    verify.remove()
    btn.remove()
    let h1 = document.querySelector("h1")
    h1.innerText = "verify success"
    container.remove()
    }
    else{
        h1.innerText = "verify not success"
        container.remove()
    }
}

// all.addEventListener("click", borderfunc)
// function borderfunc(){
//     all.style.border = "1px solid blue"
// }


let fig1 = 0
let fig2 = 0
    


function rightImage(val){
    outsideCount++
    if(outsideCount <= 2){
    
    
    if(outsideCount == 1){
        
          btn.innerHTML="reset"
        tigers.appendChild(btn)
    }
   
    else if(outsideCount == 2){
    
        verify.innerText = "verify"
        tigers.appendChild(verify)
    }

    if(val == 3){
        fig1++
    }
    else if(val == 4){
        fig2++
    }

    // if(val == 1){
    //     img1.style.border="2px solid blue"
    // }
    // else if(val == 2){
    //     img2.style.border="2px solid blue"   
    // }
    switch (val){
        case 1:  img1.style.border="2px solid blue"
        break
        case 2:  img2.style.border="2px solid blue"
        break
        case 3:  img3.style.border="2px solid blue"
        break
        case 4:  img4.style.border="2px solid blue"
        break
        case 5:  img5.style.border="2px solid blue"
        break
        case 6:  img6.style.border="2px solid blue"
        break
    }
}
else{
    alert("you cant select more than 2 images")
}

}

