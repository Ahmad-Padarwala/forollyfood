import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
import '../CSS/ProductMain.css'

const ProductItem = ({ product, isLoading }) => {
    const isProductLoading = !product || isLoading;
    const navigate = useNavigate();

    const handleWatchProduct = (prodId) => {
        navigate('/products/about-product', {
            state: { id: prodId }
        })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="product-items col-lg-3 col-md-6" key={isProductLoading ? 'loading' : product.prod_id}>
            <div className="product-all text-center">
                <div className='prod-main' onClick={() => { handleWatchProduct(product.prod_id) }}>
                    {isProductLoading ? (
                        <Skeleton animation="wave" variant="circular" width={220} height={220} />
                    ) : (
                        product.image && (
                            <img className='prod-img' src={require(`../Assets/upload/${product.image}`)} alt="" loading="lazy" />
                        )
                    )}
                </div>
                {isProductLoading ? (
                    <Skeleton animation="wave" className='prod-img-title' width={160} style={{ margin: '10px auto' }} />
                ) : (
                    <p className='prod-img-title'>{product.title}</p>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
