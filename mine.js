let poster = document.querySelector('.poster');
let myImgs = document.querySelectorAll('.carouselitem');

for (let img of myImgs){

    img.addEventListener('click', function(){
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active')
        let src  = this.src;
        poster.src = src;
    })
}