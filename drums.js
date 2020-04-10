
		function PlayDrums(e){
			const drums = document.querySelector(`audio[data-key="${e.keyCode}"]`);
			const button = document.querySelector(`.key[data-key="${e.keyCode}"]`);
			if(!drums) return;
            drums.currentTime = 0;
			drums.play();
			button.classList.add('press');
		}

		function ChangeClass(e){
			if(e.propertyName !== 'background') return; 
			
			this.classList.remove('press');
		}

		function removeTransition(e){
			if(e.propertyName !== 'background-color') return;
			this.classList.remove('press');
		}

		const keys = document.querySelectorAll('.key');
		keys.forEach(key => key.addEventListener('transitionend',removeTransition));

		window.addEventListener('keydown', PlayDrums);
