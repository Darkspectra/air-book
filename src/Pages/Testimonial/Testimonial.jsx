import img1 from "../../assets/testimonial/t1.png";
import img2 from "../../assets/testimonial/t2.png";
import img3 from "../../assets/testimonial/t3.png";

const Testimonial = () => {
    return (
        <div  className="mx-4 md:mx-16 lg:mx-40 my-10 py-10" >
            <h2 className='text-4xl font-bold p-4'>Testimonials</h2>
            <div className="py-10" style={{ backgroundColor: 'blue' }}>
            <div className="mx-auto">
                <div className="carousel flex flex-col md:flex-row justify-center gap-4 rounded-box">
                    <div className="carousel-item mb-4 md:mb-0" style={{ opacity: 0.5 }}>
                        <img src={img1} alt="Pizza" />
                    </div>

                    <div className="carousel-item md:w-1/2">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={img2} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Unforgettable journeys with John and Sarah! <br />
                                    Their travel expertise turned our dreams into reality. <br />
                                    Can't wait to explore with them again!
                                </h2>
                                <p>Emily</p>
                                <p>Adventure Enthusiast</p>
                                <div className="rating rating-xs items-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item mb-4 md:mb-0" style={{ opacity: 0.5 }}>
                        <img src={img3} alt="Pizza" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;
