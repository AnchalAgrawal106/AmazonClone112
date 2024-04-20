import React from 'react'
import "./ProductStrip1.css";
import AdProduct from './AdProduct'
import ProductCard from './ProductCard'

function ProductStrip1() {
  
    const msg1 = [
      "Up to 75% off | Headphones"
    ]
    const images1 = [
      {id: 0,
        imageUrl:"../Images/boat1.jpg",
    text: "Up to 75% off | boAt"},
      {id: 1,
        imageUrl:"../Images/boat2.jpg",
    text: "Up to 75% off | boult"},
      {id: 2,
        imageUrl:"../Images/boat3.jpg",
    text: "Up to 75% off | Noise"},
      {id: 3,
        imageUrl:"../Images/boat4.jpg",
    text:"Up to 75% off | Zebronics"}
    ]
    const floorMsg1 = ["See all offers"]

    const msg2 = ['Up to 60% off | Styles for men']
    const images2 = [
      {id: 4,imageUrl: "../Images/card31.jpg",
      text: 'Clothing'
      },
      {id: 5,imageUrl: "../Images/card32.jpg",
      text: 'Footwear'
      },
      {id: 6,imageUrl: "../Images/card33.jpg",
      text: 'Watches'
      },
      {id: 7,imageUrl: "../Images/card34.jpg",
      text: 'Bags & wallets'
      }
    ]
    const floorMsg2 = ['End of season sale']

    const msg3 = [`Starts ₹99 |All your home needs`]
    const images3 = [
      {id: 8,imageUrl: "../Images/card41.jpg",
      text: 'Spin mops, wipes & more'
      },
      {id: 9,imageUrl: "../Images/card42.jpg",
      text: 'Bathroom hardware & accessories'
      },
      {id: 10,imageUrl: "../Images/card43.jpg",
      text: 'Hammers, screwdrivers & more'
      },
      {id: 11,imageUrl: "../Images/card44.jpg",
      text: 'Extension boards, plugs & more'
      }
    ]
    const floorMsg3 = ['Explore all']

    const msg4 = [`Up to 60% off | Styles for women`]
    const images4 = [
      { id: 12,
        imageUrl: "../Images/card51.jpg",
      text: "Women's Clothing"
      },
      {id: 13,imageUrl: "../Images/card52.jpg",
      text: 'Footwear+Handbags'
      },
      {id: 14,imageUrl: "../Images/card53.jpg",
      text: 'Watches'
      },
      {id: 15,imageUrl: "../Images/card54.jpg",
      text: 'Fashion jewellery'
      }
    ]
    const floorMsg4 = ['End of season sale']

  return (
    <>
      <div className="cards-container">
    <AdProduct/>
    <div className="cardsContainer2">
    <ProductCard images = {images1} msg = {msg1} floorMsg = {floorMsg1}/>
    <ProductCard images = {images2} msg = {msg2} floorMsg = {floorMsg2}/>
    <ProductCard  images = {images3} msg = {msg3} floorMsg = {floorMsg3}/>
    <ProductCard  images = {images4} msg = {msg4} floorMsg = {floorMsg4}/>
    <ProductCard  images = {images3} msg = {msg3} floorMsg = {floorMsg3}/>
    <ProductCard  images = {images3} msg = {msg3} floorMsg = {floorMsg3}/>
    <ProductCard  images = {images3} msg = {msg3} floorMsg = {floorMsg3}/>
    <ProductCard  images = {images3} msg = {msg3} floorMsg = {floorMsg3}/>
    </div>
    </div>
    </>
  )
}

export default ProductStrip1
