import img1 from "../../assets/Thumbnail/rec4.png";
import img2 from "../../assets/Thumbnail/rec5.png";
import img3 from "../../assets/Thumbnail/rec6.png";

const Blog = () => {
    return (
        <div className='py-20 mx-4 md:mx-8 lg:mx-40'>
            <h2 className='text-4xl font-bold p-4'>Travel Blog</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                <div className='flex justify-center'>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Embracing the Digital Nomad Lifestyle the Digital Nomad thr...</h2>
                        
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Historical Journeys: Stepping Back in Time Through Travel</h2>
                            
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Sustainable Tourism: Preserving the Planet While Seeing It All</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;