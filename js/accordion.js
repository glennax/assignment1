var LEDs = document.querySelectorAll('.LED'), i;
var contents= document.querySelectorAll('.content'), i;
var isVisible = [];

function createListener(i) {
    return function (evt){

            if(isVisible[i]){
                contents[i].classList.add('visuallyHidden');
                setTimeout(function () {
			      contents[i].classList.add('hidden');
			    }, 500);
                isVisible[i] = false;

            }else{
                contents[i].classList.remove('hidden');
                contents[i].classList.remove('visuallyHidden');
                isVisible[i] = true;
            }

    };    
}

for(var i = 0; i<LEDs.length; i++){
	isVisible[i] = true;
	LEDs[i].addEventListener('click', createListener(i));
};



