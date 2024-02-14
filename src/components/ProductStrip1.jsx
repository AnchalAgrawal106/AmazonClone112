import React from 'react'
import "./ProductStrip1.css";
import AdProduct from './AdProduct'
import ProductCard from './ProductCard'

function ProductStrip1() {
  
    const msg1 = [
      "Up to 75% off | Headphones"
    ]
    const images1 = [
      {imageUrl:"../Images/boat1.jpg",
    text: "Up to 75% off | boAt"},
      {imageUrl:"../Images/boat2.jpg",
    text: "Up to 75% off | boult"},
      {imageUrl:"../Images/boat3.jpg",
    text: "Up to 75% off | Noise"},
      {imageUrl:"../Images/boat4.jpg",
    text:"Up to 75% off | Zebronics"}
    ]
    const floorMsg1 = ["See all offers"]

    const msg2 = ['Up to 60% off | Styles for men']
    const images2 = [
      {imageUrl: "../Images/card31.jpg",
      text: 'Clothing'
      },
      {imageUrl: "../Images/card32.jpg",
      text: 'Footwear'
      },
      {imageUrl: "../Images/card33.jpg",
      text: 'Watches'
      },
      {imageUrl: "../Images/card34.jpg",
      text: 'Bags & wallets'
      }
    ]
    const floorMsg2 = ['End of season sale']

    const msg3 = [`Starting ₹99 | All your home improvement needs`]
    const images3 = [
      {imageUrl: "../Images/card41.jpg",
      text: 'Spin mops, wipes & more'
      },
      {imageUrl: "../Images/card42.jpg",
      text: 'Bathroom hardware & accessories'
      },
      {imageUrl: "../Images/card43.jpg",
      text: 'Hammers, screwdrivers & more'
      },
      {imageUrl: "../Images/card44.jpg",
      text: 'Extension boards, plugs & more'
      }
    ]
    const floorMsg3 = ['Explore all']

    


  return (
    <>
      <div className="cards-container">
    <AdProduct/>
    <div className="cardsContainer2">
    <ProductCard images = {images1} msg = {msg1} floorMsg = {floorMsg1}/>
    <ProductCard images = {images2} msg = {msg2} floorMsg = {floorMsg2}/>
    <ProductCard className="setParam" images = {images3} msg = {msg3} floorMsg = {floorMsg3}/>
    </div>
    </div>
    </>
  )
}

export default ProductStrip1
