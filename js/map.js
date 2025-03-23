export const map = ()=>{
    if(document.querySelector('.estate-page__map')){
        const map = document.querySelector('.estate-page__map'),
              openButton = document.querySelector('.estate-page__open');

        openButton.addEventListener("click", function(e) {
            map.classList.toggle('active')
            openButton.classList.toggle('active')
        });
    }
}