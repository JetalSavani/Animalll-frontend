import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';

function HomeBanner() {
    return (
        // <div className='overlay'>
        //     <img src="assets/img/main-banner5.jpg" alt="" />
        // </div>
        <div className='image_wrapper'>
            <img src="assets/img/main-banner5.jpg" alt="" />
            <div class="overlay overlay_2">
                <div className='text-welcome animate__animated animate__bounceInLeft animate__delay-1s home-text'>Welcome to Animalll</div>
                <div className='description animate__animated animate__bounceInRight animate__delay-2s'>The domestication of animals is the mutual relationship
                    between non-human animals and the humans who have
                    <br /> influence on their care and reproduction.</div>
                <div className='mt-4'>

                    <Link to="/allproduct" className="btn btn-primary  home-text animate__animated animate__fadeInUp animate__delay-2s">
                        View Our Products
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner