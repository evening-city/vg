import { allSwiper } from './swiper.js';
import { city, initializeCityStyle } from './city.js';
import { map } from './map.js';
import { filter } from './filter.js';
import { tabs } from './tab.js';


document.addEventListener('DOMContentLoaded',()=>{
    initializeCityStyle()
    city()
    allSwiper()
    map()
    filter()
    tabs()
    
})