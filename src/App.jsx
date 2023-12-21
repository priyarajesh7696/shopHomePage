import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let cardItem=[{
    salebadge:"",
    image:"https://media.allure.com/photos/57d18462067b53970386200c/master/pass/natural-products.jpg",
    productName:"Fancy Product",
    review:false,
    price1:"",
    price2:"$40.00 - $80.00",
    action:"View options"
},
{
    badge:"sale",
    image:"https://tse2.mm.bing.net/th?id=OIP.zdNB_W-JL8Q-3wN_vUZbxAHaEe&pid=Api&P=0&h=180",
    productName:"Special Item",
    review:true,
    price1:"$20.00",
    price2:"$18.00",
    action:"Add to cart"
},
{
    badge:"sale",
    image:"https://tse4.mm.bing.net/th?id=OIP.v8MX9AVuEGRcXVta4N1umQHaEK&pid=Api&P=0&h=180",
    productName:"Sale Item",
    review:false,
    price1:"$50.00",
    price2:"$25.00",
    action:"Add to cart"
},
{
    badge:"",
    image:"https://tse4.mm.bing.net/th?id=OIP.kLwMkG_DBYe0hj0OYInzZAHaFj&pid=Api&P=0&h=180",
    productName:"Popular Item",
    review:true,
    price1:"",
    price2:"$40.00",
    action:"Add to cart"
},
{
    badge:"sale",
    image:"https://tse2.mm.bing.net/th?id=OIP.h57TswrkyeEWHqN_9iVa9AHaFj&pid=Api&P=0&h=180",
    productName:"Sale Item",
    review:false,
    price1:"$50.00",
    price2:"$25.00",
    action:"Add to cart"
},
{
    badge:"",
    image:"https://tse2.mm.bing.net/th?id=OIP.cazGAGWLiECaq3jrVyn9vAHaEv&pid=Api&P=0&h=180",
    productName:"Fancy Product",
    review:false,
    price1:"",
    price2:"$120.00 - $280.00",
    action:"View options"
},
{
    badge:"sale",
    image:"https://tse1.mm.bing.net/th?id=OIP.9DsdGGT6ZwrmJ7EugBj-2gHaE8&pid=Api&P=0&h=180",
    productName:"Special Item",
    review:true,
    price1:"$20.00",
    price2:"$18.00",
    action:"Add to cart"
},
{
    badge:"",
    image:"https://tse3.mm.bing.net/th?id=OIP.6_Sg-3x1AnC3O7YticuLdQHaE6&pid=Api&P=0&h=180",
    productName:"Popular Item",
    review:true,
    price1:"",
    price2:"$40.00",
    action:"Add to cart"
}]

  let [cart,setCart]=useState(0);

 
  return <>
  {/* Rendering the navbar component  */}
  <TopBar cart={cart} setCart={setCart}/>
  {/* Rendering the header component */}
  <Header />
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {/* Rendering the card component */}
                  {
                    cardItem.map((cardItem,i)=>{
                      return <Card cardItem={cardItem} cart={cart} setCart={setCart} key={i}/>
                  } )
                }
                  
                    
                </div>
            </div>
        </section>
        {/* Rendering the footer component */}
        <Footer/>
  </>
  
}

export default App