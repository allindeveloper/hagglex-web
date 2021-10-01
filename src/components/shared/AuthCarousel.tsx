import { ReactChild, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import authCarouselStyles from "../../styles/authCarouselStyles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface IAuthCarousel {
  children?: ReactChild[];
}
const AuthCarousel = ({ children }: IAuthCarousel) => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const next = () => {
    setcurrentSlide(currentSlide + 1);
  };
  const classes = authCarouselStyles();

  const prev = () => {
    setcurrentSlide(currentSlide - 1);
  };

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setcurrentSlide(index);
    }
  };
  const renderIndicators = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    return (
      <>
        {isSelected && (
          <div className={classes.indicatorsRoot}>
            <div className="me-5 cursor-pointer" onClick={prev}><ArrowBackIosIcon htmlColor={currentSlide === 0 ?  'blue':'white'} /></div>
            <div>igoioij</div>
            <div className="ms-5 cursor-pointer" onClick={next}><ArrowForwardIosIcon htmlColor={currentSlide === 2? 'blue':'white'}/></div>
          </div>
        )}
      </>
    );
  };
  return (
    <div>
     <Carousel
        autoPlay={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        renderIndicator={renderIndicators}
        selectedItem={currentSlide}
        useKeyboardArrows
        onChange={updateCurrentSlide}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default AuthCarousel;
