export const filter = ()=>{
    if(document.querySelector('.header__filter')){
        const button = document.querySelector('.header__filter'),
              filter = document.querySelector('.filter-modal'),
              close = filter.querySelector('.filter__close')
        button.addEventListener("click", function(e) {
            button.classList.toggle('active')
            filter.classList.toggle('active')
        });
        close.addEventListener("click", function(e) {
            filter.classList.remove('active')
            button.classList.remove('active')
        });

        window.addEventListener('click',()=>{
            if(button.classList.contains('active')){
                document.querySelector('.main').style.paddingBottom = filter.clientHeight + 20 + 'px'
            }else{
                document.querySelector('.main').style.paddingBottom = '90px'
            }
        })
    }
}