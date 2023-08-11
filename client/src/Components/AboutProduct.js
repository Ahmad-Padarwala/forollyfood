import React, { useEffect, useState } from 'react';
import '../CSS/ProductMain.css'
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`} {...other} >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AboutProduct() {
    const location = useLocation();
    let prodId = location.state.id;
    const [aboutProduct, setAboutProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAboutProduct();
        fetchNutritionData();
        fetchProductLimitdata();
    }, []);

    //GET PRODUCT DATA WITH PRODUCT ID
    const fetchAboutProduct = () => {
        setIsLoading(true)
        axios.get(`/product/${prodId}/6`)
            .then((response) => {
                setAboutProduct(response.data[0]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching Product data in Brand.js:', error);
                setIsLoading(false);
            });
    }

    //GET NUTRITION DATA WITH PRODUCT ID
    const [getNutrition, setGetNutrition] = useState([]);
    const fetchNutritionData = () => {
        axios.get(`/nutrition/${prodId}`)
            .then((response) => {
                setGetNutrition(response.data[0]);
            })
            .catch(() => {
                console.log("Error View Data in Nutrition page");
            })
    }

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //GET PRODUCT DATA WITH LIMIT
    const [limitProduct, setlimitProduct] = useState([]);
    const fetchProductLimitdata = () => {
        axios.get(`/product/1/4`)
            .then((response) => {
                setlimitProduct(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Product data in Brand.js:', error);
            });
    }

    const handleWatchProduct = (ID) => {
        prodId = ID;
        fetchAboutProduct();
        fetchNutritionData();
        fetchProductLimitdata();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {isLoading ? (
                <div className="container view-prod">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='view-prod-main'>
                                <Skeleton variant="rectangular" width={100} height={100} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <Skeleton animation="wave" variant="text" width={200} height={30} />
                            </div>
                            <div className="prod-short-desc">
                                <Skeleton animation="wave" variant="text" width={300} height={100} />
                            </div>
                            <div>
                                <Skeleton animation="wave" variant="text" width={150} height={40} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Render actual product details when isLoading is false
                <div className="container view-prod">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='view-prod-main'>
                                {aboutProduct.image && (
                                    <img className='prod-img' src={require(`../Assets/upload/${aboutProduct.image}`)} alt="" width="100px" />
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <p className='view-prod-title'>{aboutProduct.title}</p>
                            </div>
                            <div className="prod-short-desc" dangerouslySetInnerHTML={{ __html: aboutProduct.short_desc }} />
                            <div>
                                <NavLink to="/inquiries" className='view-prod-btn'>INQUIRY NOW</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='container view-prod-table-main'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Product Specification" {...a11yProps(0)} />
                            <Tab label="Description" {...a11yProps(1)} />
                            <Tab label="Review" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    {getNutrition && Object.keys(getNutrition).length > 0 ? (
                        <CustomTabPanel value={value} index={0}>
                            <h2 className='nutr-had'>Nutrition Information.</h2>
                            <table className='main-table'>
                                <tbody>
                                    <tr>
                                        <th className='view-prod-table-name'>Energy</th>
                                        <td className='view-prod-table-td'>{getNutrition.energy}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Total_fat</th>
                                        <td className='view-prod-table-td'>{getNutrition.total_fat}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Saturated_fat</th>
                                        <td className='view-prod-table-td'>{getNutrition.saturated_fat}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Trans_fat</th>
                                        <td className='view-prod-table-td'>{getNutrition.trans_fat}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Cholesterol</th>
                                        <td className='view-prod-table-td'>{getNutrition.cholesterol}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Sodium</th>
                                        <td className='view-prod-table-td'>{getNutrition.sodium}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Total_carbohydrates</th>
                                        <td className='view-prod-table-td'>{getNutrition.total_carbohydrates}</td>
                                    </tr>
                                    <tr>
                                        <th className='view-prod-table-name'>Protien</th>
                                        <td className='view-prod-table-td'>{getNutrition.protien}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CustomTabPanel>
                    ) : (
                        <CustomTabPanel value={value} index={0}>
                            <p>Nutrition Information is not available.</p>
                        </CustomTabPanel>
                    )}

                    {aboutProduct.long_desc && Object.keys(aboutProduct.long_desc).length > 0 ? (
                        <CustomTabPanel value={value} index={1}>
                            <div dangerouslySetInnerHTML={{ __html: aboutProduct.long_desc }} />
                        </CustomTabPanel>
                    ) : (
                        <CustomTabPanel value={value} index={1}>
                            <p>Product Description Information is not available.</p>
                        </CustomTabPanel>
                    )}

                    <CustomTabPanel value={value} index={2}>
                        <div>
                            <div>
                                <p className='prod-review-head'>Review</p>
                            </div>
                            <div className='prod-review-text'>
                                <p>There are no reviews yet.</p>
                                <p>Be the first to review “{aboutProduct.title}”</p>
                                <p className=''>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className='review-star'>
                                <Stack spacing={1}>
                                    <Rating name="size-small" defaultValue={2} size="small" />
                                </Stack>
                            </div>
                            <div>
                                <form>
                                    <div className='mb-3'>
                                        <textarea className='review-textarea' name="review" rows="3" placeholder='Your Review *'></textarea>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='review-input' type="text" name="name" placeholder='Name *' />
                                    </div>
                                    <div className='mb-3'>
                                        <input className='review-input' type="email" name="email" placeholder='Email *' />
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                                        <label class="form-check-label reiew-label" for="flexCheckChecked">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <button type='button' className='review-form-btn'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </CustomTabPanel>
                </Box>
            </div>

            <div className="container mt-5">
                <div className="row mb-md-5 mb-0">
                    {limitProduct.map((product) => (
                        <div className="product-items col-lg-3 col-md-6" key={product.prod_id}>
                            <div className="product-all text-center">
                                <div className='prod-main' onClick={() => { handleWatchProduct(product.prod_id) }}>
                                    {product.image && (
                                        <img className='prod-img' src={require(`../Assets/upload/${product.image}`)} alt="" width="100px" />
                                    )}
                                </div>
                                <p className='prod-img-title'>{product.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}