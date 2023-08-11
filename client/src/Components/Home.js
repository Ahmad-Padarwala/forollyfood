import React, { Suspense, lazy, useEffect, useState } from 'react';
import '../CSS/Home.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import ShimerUi from './ShimerUi';
const HomeAbout = lazy(() => import('./HomeAbout'));

export default function Home() {
    const [popularProduct, setPopularProduct] = useState([]);

    useEffect(() => {
        $('.wrapper').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ],
        });
        getPopulatProduct();
    }, []);
    const getPopulatProduct = () => {
        axios.get('/product/1/3')
            .then((response) => {
                setPopularProduct(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Product data in Brand.js:', error);
            });
    }

    const navigate = useNavigate();
    const handleWatchProduct = (prodId) => {
        navigate('/products/about-product', {
            state: { id: prodId }
        })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <Suspense fallback={<>
                <div className='d-flex'>
                    <div className='me-5'>
                        <ShimerUi width={500} height={400} />
                    </div>
                    <div className='ms-5'>
                        <ShimerUi width={500} height={400} />
                    </div>
                </div>
            </>}>
                <HomeAbout />
            </Suspense>

            {/************* POPULAR PRODUCTS START *************/}

            <div className="container-fluid mt-5 prod-bg">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-8 col-12 pe-lg-5 pe-0">
                            <p className='popular-head'>Popular Products</p>
                            <p className='popular-para'>Chocolate and love go hand in hand – if you want to get on your loved one’s
                                good side, feed them a steady supply of confectionery! In fact, a study by
                                the Journal of Social and Personal Relationships found that eating sweet
                                treats can lead to heightened romantic interest.
                            </p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <NavLink to="/products" className="popular-btn effect-5 my-5 mx-lg-5">View All Products</NavLink>
                        </div>
                    </div>

                    <div className="row mt-5 pb-5">
                        {
                            popularProduct.map((popular) => {
                                return (
                                    <div className="popualr-home-prod col-lg-3 col-md-6 mb-3 mb-sm-3" key={popular.prod_id}>
                                        <div className='four-card-main text-center' onClick={() => { handleWatchProduct(popular.prod_id) }}>
                                            <p className='four-card-head'>{popular.title}</p>
                                            {popular.image && (
                                                <img src={require(`../Assets/upload/${popular.image}`)} alt="popular-product" className='four-card-img img-fluid' />
                                            )}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/************* POPULAR PRODUCTS END *************/}

            {/************* TESTIMONIALS START *************/}

            <div className="container mt-5">
                <div className="row text-center">
                    <p className='testi-text'>Testimonials</p>
                    <p className='testi-head'>What Our Customers Says</p>
                    <p className='testi-para'>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                    </p>
                    <div>
                        <img src={require('../Assets/images/testimen-img.webp')} alt="" className='img-fluid testi-img' />
                    </div>
                </div>
            </div>

            <div className='testi-slider-main'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 text-center testi-slider-text">
                            Chocolate Makes Everything Better
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-6 pt-3">
                            {/* static slider */}
                            <div className="wrapper slider-wrapper">
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider1.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider2.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider3.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider4.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider5.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider6.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider7.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider8.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider9.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider10.webp')} alt='bottom-slider' />
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/images/bottom-slider11.webp')} alt='bottom-slider' />
                                </div>
                            </div>
                            {/* static slider end */}
                        </div>
                    </div>
                </div>
            </div >

            {/************* TESTIMONIALS END *************/}

        </>
    )
}

