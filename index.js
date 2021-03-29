const stateContainer = document.getElementsByClassName('stateContainer')

linkToContent=(event)=>{
    const target = event.target
    if (target.className === 'stateContainer'){
        target.submit()
    } else {
        target.parentNode.submit()
    }
}

colorStateContainer=()=>{
    colors = ['#7FFFD4','#98FB98','#FFDEAD','#FF7F50','#A9A9A9','#FFC0CB']
    let i;
    for(i=0;i<stateContainer.length;i++){
        stateContainer[i].style.backgroundColor = colors[i]
    }
}

init=()=>{
    colorStateContainer()
    let i;
    for(i=0;i<stateContainer.length;i++){
        stateContainer[i].addEventListener('click',linkToContent)
    }
}

init()