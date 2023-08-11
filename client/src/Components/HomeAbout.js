import React from 'react';
import '../CSS/Home.css'

export default function HomeAbout() {
    return (
        <>
            {/************** OUR HISTORY SECTION START **************/}

            <div className="container-fluid mt-md-0 mt-5">
                <div className="row">
                    <div className="col-lg-6 p-0 col-md-12 d-lg-block d-none history-bg">
                        <img src={require('../Assets/images/history-bg.webp')} alt="" className='img-fluid about-img' />
                    </div>
                    <div className="col-lg-6 col-md-12 pt-md-5 ps-5 history-right-side">
                        <p className='about-text'>About us</p>
                        <p className='about-head'><span className='about-brd pb-2'>OUR</span> HISTORY</p>
                        <p className='about-para'><span>Forolly</span> was established in Nov 2020.
                            From the snapshot of its creation, the organization put the majority of its undertakings to lead the best portrayal of the brand Forolly on the Indian market.
                            After the essential exercises to promote the <span>forolly</span> mark in different States, the group focused on building a methodology for perhaps the broadest circulation of its items.</p>
                    </div>
                </div>
            </div>
            {/************** OUR HISTORY SECTION END **************/}

            {/************** WHY CHOOSE US START **************/}

            <div className="container-fluid mt-md-0 mt-5">
                <div className="row shadow">
                    <div className="col-lg-4 pt-lg-5 ps-lg-5">
                        <p className='serv-text'>Services</p>
                        <p className='choose-head'><span>WHY</span> CHOOSE US</p>
                    </div>
                    <div className="col-lg-8 choose-bg">
                        <div className="row choose-main">
                            <div className="col-lg-4 col-sm-12 choose">
                                <div className='choose-icon'> <i className="fa-solid fa-bag-shopping"></i> </div>
                                <div className='choose-info'>
                                    <p>70+</p>
                                    <p>PRODUCTS</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 choose">
                                <div className='choose-icon'> <i className="fa-solid fa-bag-shopping"></i> </div>
                                <div className='choose-info'>
                                    <p>500+</p>
                                    <p>DISTRIBUTERS</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 choose">
                                <div className='choose-icon'> <i className="fa-solid fa-bag-shopping"></i> </div>
                                <div className='choose-info'>
                                    <p>100k+</p>
                                    <p>CUSTOMERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/************** WHY CHOOSE US END **************/}

            {/*************** THREE CARD START ***************/}

            <div className="container-fluid mt-4">
                <div className="container pt-lg-5 pt-0">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-5 mt-5">
                            <div className='d-flex pt-5 card-main'>
                                <div className='card-icon'><i className="fa-solid fa-award"></i></div>
                                <div className='ps-3'>
                                    <p className='card-head'>High Quality</p>
                                    <p className='card-para'>Forolly is a great brand with a variety of options like Brownie Vanilla,
                                        Badam Shake, Cherry Merry, Choco Coconut, Mango Coconut Barfi, and Choco
                                        Paan and it’s one of our top dietitian-approved choices for chocolates
                                        with high-quality ingredients.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-5 mt-5">
                            <div className='d-flex pt-5 card-main'>
                                <div className='card-icon'> <i className="fa-solid fa-face-smile"></i></div>
                                <div className='ps-3'>
                                    <p className='card-head'>Super Taste</p>
                                    <p className='card-para'>Chocolate feels smooth and velvety in your mouth.
                                        Also known as mouth-feel, high-quality chocolate has a distinct texture that
                                        is difficult to describe but easily recognizable when you feel it in your
                                        own mouth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-5 mt-5">
                            <div className='d-flex pt-5 card-main'>
                                <div className='card-icon'><i className="fa-solid fa-gift"></i></div>
                                <div className='ps-3'>
                                    <p className='card-head'>Great for Gift</p>
                                    <p className='card-para'>From the indulgent scent to the silky-smooth texture
                                        and decadent flavor, it’s tough not to love chocolate—which is exactly why
                                        it makes for a solid gift for every occasion, whether it be Mother’s Day or
                                        Valentine’s Day. it’s almost universally beloved by all ages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*************** THREE CARD END ***************/}
        </>
    )
}
