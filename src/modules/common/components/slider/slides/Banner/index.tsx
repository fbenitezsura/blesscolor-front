import { SplideSlide } from '@splidejs/react-splide';

const SlideBanner = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <img className="hidden md:block h-[700px]" src={slideProps.desktopUrl || slideProps.url} alt="Image 1" width="100%"/>
            <img className="block md:hidden h-[450px]" src={slideProps.mobileUrl || slideProps.url} alt="Image 1" width="100%"/>
        </SplideSlide>
    )
}

export default SlideBanner;