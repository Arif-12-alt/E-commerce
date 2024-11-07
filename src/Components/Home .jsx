import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Home = ({addtocart}) => {
  const [newProduct, setNewProduct] = useState([]);
  const [FeaturedProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);

  const filtercate = (x) => {
    const filterproduct = HomeProduct.filter((value) =>
     {
      return value.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  const allTrendingProduct = () => 
    {
    setTrendingProduct(HomeProduct);
  };
  
  useEffect(() => {
    productcategory();
  }, []);
  const productcategory = () => 
    {
    const newcategory = HomeProduct.filter((x) => 
      {
      return x.type === "New";
    });
    setNewProduct(newcategory);

    const featuredcategory = HomeProduct.filter((x) => 
      {
      return x.type === "Featured";
    });
    setFeaturedProduct(featuredcategory);

    const topcategory=HomeProduct.filter((x)=>{
      return x.type === "Top"
    })
    setTopProduct(topcategory)
  };

  return (
    <>
      <div className="home">
        <div className="top-banner">
          <div className="content">
            <h3>Silver Aluminium</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <Link to="shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("New")}>New</h3>
                  <h3 onClick={() => filtercate("Featured")}>Features</h3>
                  <h3 onClick={() => filtercate("Top")}>Top Selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((value) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img-box">
                            <img src={value.img} alt="" />
                          </div>
                          <div className="info">
                            <h3>{value.Name}</h3>
                            <p>${value.price}</p>
                            <button className="btn" onClick=  {()=>addtocart(value)}>Add to Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div><br/>
                <center><Link className="button" to='/shop'>Show More</Link></center>
              </div>
            </div>
            <div className="right-box">
              <div className="right-container">
                <div className="testimonial">
                  <div className="head">
                    <h3>Our Testimonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img-box">
                      <img src="image/T1.avif" alt="Testimonial" />
                    </div>
                    <div className="info">
                      <h3>Stephan Robot</h3>
                      <h4>Web Designer</h4>
                      <p>
                        Duis faucibus enim vitae nunc molestic, nec facilisis
                        arcu pulvinar nullam mattisr nullam matths
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="form">
                    <p>Join Our Malling List</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    />
                    <button>Subscribe</button>
                    <div className="icon-box">
                      <div className="icon">
                        <FaFacebookSquare />
                      </div>
                      <div className="icon">
                        <FaTwitterSquare />
                      </div>
                      <div className="icon">
                        <FaInstagramSquare />
                      </div>
                      <div className="icon">
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left-box">
              <div className="box">
                <img src="image/Multi-Banner-1.avif" alt="banner" />
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner" />
              </div>
            </div>
            <div className="right-box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt="Banner" />
                <img src="image/Multi-Banner-4.avif" alt="banner" />
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt="Banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((value, index) => {
                return (
                  <>
                    <div key={index} className="product-box">
                      <div className="img-box">
                        <img src={value.img} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{value.Name}</h3>
                        <p>${value.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            {" "}
                            <FaRegHeart />
                          </button>
                          <button onClick={()=>addtocart(value)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {FeaturedProduct.map((value, index) => {
                return (
                  <>
                    <div key={index} className="product-box">
                      <div className="img-box">
                        <img src={value.img} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{value.Name}</h3>
                        <p>${value.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            {" "}
                            <FaRegHeart />
                          </button>
                          <button onClick={()=>addtocart(value)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((value, index) => {
                return (
                  <>
                    <div key={index} className="product-box">
                      <div className="img-box">
                        <img src={value.img} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{value.Name}</h3>
                        <p>${value.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            {" "}
                            <FaRegHeart />
                          </button>
                          <button onClick={()=>addtocart(value)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
