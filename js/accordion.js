var LEDs = document.querySelectorAll('.LED'), i;
var contents= document.querySelectorAll('.content'), i;
var isVisible = [];

function createListener(i) {
    return function (evt){

            if(isVisible[i]){
                contents[i].classList.add('hidden');
                isVisible[i] = false;

            }else{
                contents[i].classList.remove('hidden');
                isVisible[i] = true;
            }

    };    
}

for(var i = 0; i<LEDs.length; i++){
	isVisible[i] = true;
	LEDs[i].addEventListener('click', createListener(i));
};

// var LED1 = document.querySelector('.LED1');
// var isVisible1 = true;
// var education = document.querySelector('.education');

// LED1.addEventListener('click', 
// 	function (evt){
// 		if(isVisible1){
// 			education.classList.add('hidden');
// 			isVisible = false;

// 		}else{
// 			education.classList.remove('hidden');
// 			isVisible = true;
// 		}

// });

// var LED2 = document.querySelector('.LED2');
// var isVisible2 = true;
// var experience = document.querySelector('.experience');
// LED2.addEventListener('click', 
// 	function (evt){
// 		if(isVisible2){
// 			experience.classList.add('hidden');
// 			isVisible = false;

// 		}else{
// 			experience.classList.remove('hidden');
// 			isVisible = true;
// 		}

// });

// var LED3 = document.querySelector('.LED3');
// var isVisible3 = true;
// var skills = document.querySelector('.skills');
// LED2.addEventListener('click', 
// 	function (evt){
// 		if(isVisible3){
// 			skills.classList.add('hidden');
// 			isVisible = false;

// 		}else{
// 			skills.classList.remove('hidden');
// 			isVisible = true;
// 		}

// });

