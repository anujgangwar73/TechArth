import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from '../assets/slick1.jpg';
import slick2 from '../assets/slick2.png';
import slick3 from '../assets/slick3.jpg';
import slick4 from '../assets/slick4.jpg';
import slick5 from '../assets/slick5.jpg';

const LogoSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 800,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            <img src={slick1} height={"58px"} width={"119px"} />
            <img src={slick3} height={"58px"} width={"230px"} />
            <img src={slick4} height={"58px"} width={"215px"} />
            <img src={slick5} height={"58px"} width={"204px"} />
            <img src={slick2} height={"58px"} width={"233px"} />
        </Slider>
    );
};

export default LogoSlider;