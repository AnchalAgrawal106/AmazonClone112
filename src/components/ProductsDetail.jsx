import React from 'react'
import  './ProductsDetail.css'
import SideSlider from './SideSlider'

function ProductsDetail({products}) {
    console.log(products);
    if(!products || products.length === 0){
        return <div>No products available</div>
    }
      return (
    <>
     <div className="result"> 35 results</div>
        <hr className='horizontal-space'/>
    <div className="combine-sideslide-result">
    <SideSlider/>
    <div className="resultHead">
      <h2>Results</h2>
      <div className="product-results">
        {products.map((product, index) =>(
           <div key= {index} className="result-card">
           <div className="selling-value">
 
           </div>
           <div className='product-child0'>
           <img className='product-child' src={product.img} alt={`boat product in ${index}`} />
           <div className="overlay1"></div></div>
           <div className='product-description'>
           <div className='product-name-description'><a className='product-detail-description' href="#">{product.description}</a></div>
           { product.totalbuy && <span className='product-buys detail-list'>{`${product.totalbuy} bought in past month`}</span>}
           <span className='detail-list'> 
           <span className='rupee '><sup>₹</sup></span>
           <span className='product-price'>{product.rate} </span> 
           <span className='product-rate'>M.R.P: </span>
           <span className='product-rate cut'>₹</span> <span className='product-rate original-price cut'>{product.originalrate}
           </span> <span className='off-offer'>{`(${product.discount} off)`}</span> </span>
           <span className='detail-list'><span className='prime-code'>&#10003; </span> <span className='prime-code1'>prime</span>
           <span className='get-it-offer'>Get it by <span className='get-it-offer date-name'>{product.atyourdoor}</span></span></span>
           <span className='free-delivery detail-list'>Free Delivery over ₹499. Fulfilled by Amazon</span>
           </div>
           
         </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default ProductsDetail
