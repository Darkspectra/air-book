
import img1 from "../../assets/Thumbnail/rec1.png";
import img2 from "../../assets/Thumbnail/rec2.png";
import img3 from "../../assets/Thumbnail/rec3.png";

const Destination = () => {
    return (
        <div className='mx-4 md:mx-8 lg:mx-40'>
            <h2 className='text-2xl font-bold p-4'>Featured Destinations</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                <div className='flex justify-center'>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
