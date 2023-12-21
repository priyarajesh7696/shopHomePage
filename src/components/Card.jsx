
import React,{useState} from 'react'

function Card({cart,setCart,cardItem}) {
    let [toggle,setToggle] = useState(true)
    
  return <>
    <div className="col mb-5">

                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute" 
                           style={{top:"0.5rem",right:"0.5rem"}}>{cardItem.badge}</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src={cardItem.image} alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                   {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{cardItem.productName}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {
                                      cardItem.review ?<div className="d-flex justify-content-center small text-warning mb-2">
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                  </div>:""  
                                    }
                                    
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{cardItem.price1}</span>
                                    {cardItem.price2}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                    toggle?<button className="btn btn-outline-dark mt-auto"onClick={()=>{
                                    setCart(cart+1)
                                    setToggle(false)}}>
                                        {cardItem.action}
                                        </button>:
                                        <button className="btn btn-outline-danger mt-auto"onClick={()=>{
                                        setCart(cart-1);
                                        setToggle(true);
                                        }
                                        }>
                                        Remove from cart
                                        </button>
                                    }
                                        </div>
                            </div>
                            
                        </div>
                    </div>
   
  </>
}

export default Card