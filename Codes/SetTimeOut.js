const delayColorChange = (newColor,delay,next) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
        next && next()
    }, delay)
}

delayColorChange('red', 1000,()=>{
    delayColorChange('orange', 1000,()=>{
        delayColorChange('yellow', 1000,()=>{
            delayColorChange('blue', 1000,()=>{
                delayColorChange('green', 1000,()=>{
    
                })
            })
        })
    })
});