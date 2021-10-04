import { ReactChild, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import authCarouselStyles from "../../styles/authCarouselStyles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material";
import clsx from "clsx";
interface IAuthCarousel {
  children?: ReactChild[];
}
const AuthCarousel = ({ children }: IAuthCarousel) => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const appTheme = useTheme();
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
 const handleSetSlide = (index:number)=>{
    setcurrentSlide(index);
  }
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
            <div className="me-5 cursor-pointer" onClick={prev}>
              <ArrowBackIosIcon
              fontSize="small"
                htmlColor={
                  currentSlide === 0
                    ? appTheme.palette.secondary.main
                    : appTheme.palette.primary.contrastText
                }
              />
            </div>
            
            <div className={classes.circlesRoot}>
              {children &&
                children?.map((item, i) => (
                  <div
                  key={i}
                   onClick={()=>handleSetSlide(i)}
                    className={clsx(
                      index === i
                        ? classes.activeCircle
                        : classes.inactiveCircle
                    )}
                  ></div>
                ))}
            </div>
            <div className="ms-5 cursor-pointer" onClick={next}>
              <ArrowForwardIosIcon
              fontSize="small"
                htmlColor={
                  currentSlide === 2
                    ? appTheme.palette.secondary.main
                    : appTheme.palette.primary.contrastText
                }
              />
            </div>
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
        className={classes.carouselRoot}
        onChange={updateCurrentSlide}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default AuthCarousel;
