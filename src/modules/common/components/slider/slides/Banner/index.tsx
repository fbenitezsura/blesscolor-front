import { SplideSlide } from '@splidejs/react-splide';

const SlideBanner = () => {

    return (
        <SplideSlide>
            <img className="hidden md:block h-[700px]" src="/img/banners/banner1.webp" alt="Image 1" width="100%"/>
            <img className="block md:hidden h-[450px]" src="/img/banners/banner1m.webp" alt="Image 1" width="100%"/>
        </SplideSlide>
    )
}

export default SlideBanner;