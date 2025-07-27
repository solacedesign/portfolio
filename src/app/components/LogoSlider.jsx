"use client"
import Slider from 'react-infinite-logo-slider'

const LogoSlider = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="cssFrame.png" alt="any" className='w-15' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="Frame.png" alt="any2" className='w-15' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="AI.png" alt="any3" className='w-15' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="InDesign.png" alt="any3" className='w-15' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="FigmaIcon.png" alt="any3" className='w-15' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="PSFrame.png" alt="any3" className='w-15' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="PremierProIcon.png" alt="any3" className='w-15' />
            </Slider.Slide>
            
        </Slider>
    )
}              
                     
export default LogoSlider