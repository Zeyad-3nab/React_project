import React from 'react'
import "./Page.css";

export const Page = () => {
    const products=[
        {
            productId:"1",
            productName:"Men Hoodie",
            productPrice:"$20.99",
            productImage:"https://tse3.mm.bing.net/th?id=OIP.-pfA0u3I7dZ6EPngFL_VJwHaJ3&pid=Api&P=0&h=220"
        },
        {
            productId:"2",
            productName:"Men Hoodie",
            productPrice:"$25.99",
            productImage:"https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/6c4c5311-ee72-4b46-a734-0c4887bbeb07.jpg"
        },
        {
            productId:"3",
            productName:"Men Hoodie",
            productPrice:"$35.00",
            productImage:"https://i5.walmartimages.com/asr/49093c2c-f8ad-45a4-8c1a-b583c394d491_1.58dd1a7d1ea1ff52c06bf1afb9f9a0cf.jpeg"
        }]
  return (
    <section className='sectionall'>
       {products.map((product)=>(
         <div className='slide'>
         <div className="Image">
           <img src={product.productImage} alt="" />
         </div>
         <h2>{product.productName}</h2>
         <p>That's a good Hoodie</p>
         <div className="price">
           <h4>S M L XL</h4>
           <h3>{product.productPrice}</h3>
         </div>
           <button className='button'>ADD TO CART</button>
       </div>
       ))}
       
    </section>
  )
}
