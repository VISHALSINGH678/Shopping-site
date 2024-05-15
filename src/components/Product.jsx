import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({items, cart, setCart}) {
  

  const addToCart = (id, price, title, description, imgSrc)=>{
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj])
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
      <div className="container my-5">
        <div className="row">
          {items.map((Products) => {
            return (
              <>
              <div key={Products.id} className="col-lg-4 col-md-6 my-3 text-center">
                <div className="card" style={{width:'18rem'}}>
                    <Link to={`/product/${Products.id}`} style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                  <img src={Products.imgSrc} className="card-img-top" alt="..." />
                    </Link>
                  <div className="card-body">
                    <h5 className="card-title">{Products.title}</h5>
                    <p className="card-text">{Products.description}</p>
                    <button className="btn btn-primary mx-3">{Products.price} {" "}₹</button>
                    <button onClick={()=>addToCart(Products.id, Products.price, Products.title, Products.description, Products.imgSrc)} className="btn btn-warning">Add To Cart</button>
                    </div>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
