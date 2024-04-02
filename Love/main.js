const body = document.getElementById('body')
const text = document.getElementById('text')
const ligth = document.getElementById('ligthbulb')
const input = document.getElementById('inputn')

function changeTheme(){
    if(body.style.backgroundColor === "var(--darkmode-background)" && text.style.color === "var(--darktext)"){
         body.style.backgroundColor ="var(--lightmode-background)"
        text.style.color ="var(--ligthtext)"
        ligth.style.color="#FFC94A"
        input.style.color="var(--ligthtext)"
        display.style.color="var(--ligthtext)"

    }else{
        body.style.backgroundColor = "var(--darkmode-background)"
        text.style.color ="var(--darktext)"
        input.style.color="var(--darktext)"
        ligth.style.color="var(--darktext)"
        display.style.color="var(--darktext)"
    }
}

/////Function of all
var yes = ["are you feeling ok today","well good so you can answer some questions from me then","are you single?","ede wow, eme... <br> but if your single can i be your future?","OMG!!! can i be yours baby?","Be minee?"]
var no = ["Please","pretty please","sge na please","please!!","Please ohh"]
const display = document.getElementById('text-display')
var inputText = document.getElementById('input-message')
var indexYes = 0
var indexno = 0
function sendbtn(){
    if(inputText.value === "yes"){
      indexYes = (indexYes + 1)
        display.innerHTML = yes[indexYes]
        inputText.value=""    
        if(indexYes === 5 && inputText.value==="yes"){
            display.innerHTML="Love you mwuahh"
            inputText.style.display="none"
            input.style.display="none"
           } 
    }
    else if(indexYes === 2 && inputText.value === "no"){
            display.innerHTML="Owh Sorry Wrong send"
            inputText.style.display="none"
            input.style.display="none"
           }
            


        else if(inputText.value ==="no"){
        indexno = (indexno + 1)
        display.innerHTML = no[indexno]
        inputText.value=""
                if(indexno === 4){
                    indexno = 0
                    inputText.value=""
                }
        }
       
    else{
        alert("error please enter yes or no only")
    }
    
}
    

