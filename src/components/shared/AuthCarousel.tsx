import { ReactChild, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import authCarouselStyles from '../../styles/authCarouselStyles';


interface IAuthCarousel {
    children?:ReactChild[]
}
const AuthCarousel = ({children}:IAuthCarousel)=>{

        const [currentSlide, setcurrentSlide] = useState(0)
        const next = () => {
            setcurrentSlide(currentSlide+1)
         
        };
        const classes = authCarouselStyles()

       const prev = () => {
            setcurrentSlide(currentSlide-1)
           
        };

        const updateCurrentSlide = (index:number) => {

            if (currentSlide !== index) {
                setcurrentSlide(index)
            }
        };
        const renderIndicators = (
            clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
            isSelected: boolean,
            index: number,
            label: string
        )=> {
            
            return (
                <div className={classes.indicatorsRoot} style={{visibility:isSelected?'visible':'hidden'}}>
                    <div>
                    left
                    </div>
                    <div>
                        igoioij
                    </div>
                    <div>
                        right
                    </div>
                </div>
            )

        }

            const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
            const containerStyle = { margin: '5px 0 20px' };
            return (
                <div>
                    {/* <div style={containerStyle}>
                        <button onClick={prev} style={buttonStyle}>
                            Prev
                        </button>
                        <button onClick={next} style={buttonStyle}>
                            Next
                        </button>
                      
                    </div> */}
                    <Carousel
                        autoPlay={false}
                        showArrows={false}
                        showIndicators={true}
                        showStatus={false}
                        showThumbs={false}
                        renderIndicator={renderIndicators}
                        selectedItem={currentSlide}
                        onChange={updateCurrentSlide}
                    >
                        {children}
                    </Carousel>
                </div>
            );
};

export default AuthCarousel