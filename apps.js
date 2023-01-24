function startCount(){
    const start = document.getElementById("start")
    const end = document.getElementById("end")
    const step = document.getElementById("step")
    if(start.value == [] || end.value == [] || step.value == [] || step.value == 0 || (Number(start.value) == Number(end.value))){
document.getElementById("answer").style.cssText = 'padding: 20px 20px;' +
'color: red'
document.getElementById("answer").innerHTML = "Impossible count!"
    } else {
        document.getElementById("answer").style.cssText = 'padding: 20px 20px;' +
'color: black'
        document.getElementById("answer").innerHTML = "Count:"
        if(Number(start.value) < Number(end.value)){
            for(let i = Number(start.value) ; i <= Number(end.value); i += Number(step.value)) {
                document.getElementById("answer").innerHTML += `👉 ${i}` 
            }
            document.getElementById("answer").innerHTML += `✨` 
        } else if (Number(start.value) > Number(end.value)) {
            for(let i = Number(start.value) ; i >= Number(end.value); i -= Number(step.value)) {
                document.getElementById("answer").innerHTML += `👉 ${i}` 
            }
            document.getElementById("answer").innerHTML += `✨`
        }
        
    }
}