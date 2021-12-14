    
     function joueLeSons(h) {
     const audio = document.querySelector(`audio[data-key="${h.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${h.keyCode}"]`);
     console.log(audio);   
        if(!audio) return;
        audio.currentTime = 0,07;
        audio.play();
        key.classList.add('playing');
    };
    function removeTransition(h) {
       if(h.propertyName !== 'transform') return; 
        this.classList.remove('playing');
    }
    const key = document.querySelectorAll('.key');
    key.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', joueLeSons); 