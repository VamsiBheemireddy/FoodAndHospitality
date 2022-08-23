import React from 'react';
import '../App.css'
import Carditem from './Carditem';
import './Cards.css';
import Footer from './Footer';
import './Hospitality.css'



function FOOD() {
  return (
    <div className='hero-container1'>
      
      <video className='video1' src="/videos/video-2.mp4" autoPlay loop muted />
     
      <div>
      

        <div className='cards__container'>
          <div className='cards__wrapper1'>
            <ul className='cards__items'>

            <h1>Explore worlds Top FOODS   |</h1>
              <Carditem
                src='images/im1.jpg'
                text='kfc'
                label='kfc'
                desc='KFC (also known as Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. ... The chain is a subsidiary of Yum! Brands, a restaurant company that also owns the Pizza Hut, Taco Bell and WingStreet chains.'
                path='/kfc'
                btntext='₹850/-'
                className='card1'
              />
              <Carditem
                src='images/im2.jpg'
                text='pastha'
                label='Pastha'
                desc='pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals.'
                path='/pastha'
                btntext='₹300/-'
                className='card2'
              />

              <Carditem

                src='images/im3.jpg'
                text='mixedpastha'
                label=''
                desc='Mixed pasta is an Italian style mixed pasta recipe cooked in a savory tomato based sauce. The boiled colorful and differently shaped pasta tossed with sauces.'
                btntext='₹450/-'
                path='/mixedpastha'
                className='card1'
              />
            </ul>
            <ul className='cards__items'>
            <h1>Explore Top deals    |</h1>
              <Carditem

                src='images/im4.jpg'
                text='pizza'
                label='Pizza'
                desc='The Caravela Beach Resort is an independent ‘5-Star Deluxe’ beach resort comprising of 201 rooms, 
                several of which have direct sea-views. (The Resort was previously
                   affiliated with Renaissance Hotels for several years). '
                btntext='25% off'
                path='/pizza'
                className='card1'
              />
<Carditem

                src='images/im5.jpg'
                text='Dosa'
                label='Dosa'
                desc=' dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice. ... Dosas are served hot along with chutney by tradition and sambar in recent times. Other accompaniments include chutney powder (a fine groundnut and lentil powder). '
                btntext='25% off'
                path='/Dosa'
                className='card1'
              />
<Carditem

                src='images/im6.jpg'
                text='samosa'
                label='Samosa'
                desc='A samosa (/səˈmoʊsə/) is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions, peas, chicken and other meats, or lentils. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.'
                btntext='25% off'
                path='/Samosa'
                className='card1'
              />
            </ul>
            <div>

            </div>

          </div>


        </div>


      </div>
      <Footer />
    </div>
  );
}
export default FOOD;