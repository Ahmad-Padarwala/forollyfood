import React, { useEffect, useState } from 'react';
import '../CSS/ProductMain.css';
import axios from 'axios';
import ProductItem from './ProductItem';

export default function ProductMain() {
    const [isLoading, setIsLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchProductsData();
    }, []);

    const fetchProductsData = () => {
        setIsLoading(true);
        axios.get('/product/1/1')
            .then((response) => {
                setProductData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching Product data in Brand.js:', error);
                setIsLoading(false);
            });
    }

    return (
        <>
            <div className="container-fluid prod-bg1 img-fluid shadow">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 welcome-main">
                        <p className='prod-welcome-text'>Welcome to our</p>
                        <p className='prod-welcome-head'><span className='prod-head-brd'>FO</span>ROLLY</p>
                        <p className='prod-welcome-para'>Chocolate and love go hand in hand – if you want to get
                            on your loved one’s good side, feed them a steady supply of confectionery! In fact, a
                            study by the Journal of Social and Personal Relationships found that eating sweet treats
                            can lead to heightened romantic interest.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row text-center">
                    <p className='prod-about-text'>Our</p>
                    <p className='prod-about-head'>PRODUCTS</p>
                    <p className="prod-about-para">
                        Your content goes here. Edit or remove this text inline or in the module Content settings.
                        You can also style every aspect of this content in the module Design settings and even
                        apply custom CSS to this text in the module Advanced settings
                    </p>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row mb-md-5 mb-0">
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <ProductItem key={index} isLoading={isLoading} />
                        ))
                    ) : (
                        productData.map((product) => (
                            <ProductItem key={product.prod_id} product={product} isLoading={isLoading} />
                        ))
                    )}
                </div>
            </div >

        </>
    )
}
