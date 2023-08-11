import React, { useEffect, useState } from 'react';
import '../CSS/Slider.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShimerUi from './ShimerUi';

export default function Slider() {

    const [getSlider, setGetSlider] = useState([]);
    const navigate = useNavigate();
    let flag = 0;

    const controller = (x) => {
        flag = flag + x;
        slideshow(flag);
    }

    const slideshow = (num) => {
        let slides = document.getElementsByClassName('slide');
        if (slides.length === 0) {
            return;
        }
        if (num === slides.length) {
            flag = 0;
            num = 0;
        }
        if (num < 0) {
            flag = slides.length - 1;
            num = slides.length - 1;
        }
        for (let y of slides) {
            y.style.display = "none";
        }
        slides[num].style.display = "block";
    }

    useEffect(() => {
        fetchSliderData();
    }, []);

    useEffect(() => {
        controller(1);
    }, [getSlider]);

    const fetchSliderData = () => {
        axios.get(`/product/1/2`)
            .then((response) => {
                setGetSlider(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Brand data in Brand.js:', error);
            });
    }

    const handleWatchProduct = (prodId) => {
        navigate('/products/about-product', {
            state: { id: prodId }
        })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>

            <div className="main-bg">
                <div className='background2'>
                    {getSlider.length === 0 ? (
                        <div className="slide">
                            <div id="first-choco" className='d-flex mt-md-5 mt-0'>
                                <div className="top-slider-main">
                                    <div className='mb-4'>
                                        <ShimerUi width={300} height={40} />
                                    </div>
                                    <ShimerUi width={300} height={40} />
                                </div>
                                <div className="top-slider-image-main">
                                    <ShimerUi width={300} height={400} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        getSlider.map((slider) => (
                            <div className="slide" key={slider.id}>
                                <div id="first-choco" className='d-flex mt-md-5 mt-0'>
                                    <div className="top-slider-main">
                                        <div className="top-slider-tilte">
                                            <p>{slider.title}</p>
                                        </div>
                                        <div className="top-slider-desc">
                                            <p>{slider.description}</p>
                                        </div>
                                        <button type="button" className="top-slider-btn" onClick={() => { handleWatchProduct(slider.prod_id) }}>Read More</button>
                                    </div>
                                    <div className="top-slider-image-main">
                                        <img className="top-slider-image" src={require(`../Assets/upload/${slider.image}`)} alt='' />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    <span className="arrow prev" onClick={() => controller(-1)}>&#10094;</span>
                    <span className="arrow next" onClick={() => controller(1)}>&#10095;</span>
                </div>
            </div>
        </>
    )
}
