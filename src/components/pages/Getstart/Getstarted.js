import React from 'react';
import '../../../App.css'
import Carditem from '../../Carditem';
import './../../Cards.css';
import './Getstarted.css';


function Getstarted() {
  return (
    
    <div className='hero-container1'>
      
      <video className='video2'src="/videos/video-2.mp4" autoPlay loop muted/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/img -food.jpg'
                    text='Food'
                    label='Food'
                    desc='A vast collection of the best recipes from famous chefs in India. Browse by ingredient, cuisine, occasion, 
                    festivals, quick and easy, low calorie, we have something for everyone! We have a wide.'
                    path='/Food'
                    btntext='Book now'
                    className='card1'
                    />
                    <Carditem
                    src='images/img-hospitality.jpg'
                    text='Hospitality'
                    label='Hospitality'
                    desc='Know the info about touring,accommodations,and entertaining tourists spots  & travel guide, its travel attractions like wildlife
                    , hill stations, beaches, adventure, pilgrimage and tour packages related to them.'
                    path='/Hospitality'
                    btntext='Know More'
                    className='card2'
                    />
                    
                                    </ul>
                     
                </div>
              
           
            </div>
            
            
     </div>
     <footer/>
    </div>
  );
}
export default Getstarted;