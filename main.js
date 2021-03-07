function scrollAppear(){
    var columnMiddle = document.querySelector('footer');
    var introColumnMiddle = columnMiddle.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/0.5;

    if(introColumnMiddle < screenPosition){
        columnMiddle.classList.add('intro-column-middle');
    }
}

window.addEventListener('scroll',scrollAppear);
