export const allSwiper = ()=>{
    const smallTablet = matchMedia('(max-width: 768px)');


    const scrollSwiper = new Swiper('.primary__controls',{
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 8,
    })

    const estateSwiper2 = new Swiper(".estate-page__swiper-2", {
        slidesPerView: 'auto',
        spaceBetween: 8,
        watchSlidesProgress: true,
      });

    const estateSwiper = new Swiper('.estate-page__swiper-1',{
        slidesPerView: 'auto',
        spaceBetween: 8,
        thumbs: {
            swiper: estateSwiper2,
        },
    })

    const carSwiper = new Swiper('.car-swiper',{
        slidesPerView: 'auto',
        spaceBetween: 8,
        pagination: {
            el: ".car-pagination",
            type: "progressbar",
        },
    })


    let serviceSwiper = null

    const startResizeFunc = ()=>{
        if(innerWidth < 767){
            serviceSwiper = new Swiper('.service__swiper', {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".service__next",
                    prevEl: ".service__prev",
                  },
            });
        } else{
            if(serviceSwiper){
                serviceSwiper.destroy()
                serviceSwiper = null
            }
        }
    }

    startResizeFunc()

    smallTablet.addEventListener('change',()=>{
        if(innerWidth < 767){
            serviceSwiper = new Swiper('.service__swiper', {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".service__next",
                    prevEl: ".service__prev",
                  },
            });
        } else{
            if(serviceSwiper){
                serviceSwiper.destroy()
                serviceSwiper = null
            }
        }
    })
}