let buttons = document.querySelectorAll('.wave-btn')
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        let wave = document.createElement('span')
        wave.style.left = x + 'px'
        wave.style.top = y + 'px'
        this.appendChild(wave)

        setTimeout(() => {
            wave.remove()
        },1000)
    })
})