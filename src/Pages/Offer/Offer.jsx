import img1 from "../../assets/Offer/o1.png";
import img2 from "../../assets/Offer/o2.png";
import img3 from "../../assets/Offer/o3.png";

const Offer = () => {
    return (
        <div className='py-20 mx-4 md:mx-12 lg:mx-40'>
            <h2 className='text-4xl font-bold p-4'>Deals and Offers</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">With bkash payment only</h2>
                        <p className="text-blue-500 text-xl">up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">With bkash payment only</h2>
                        <p className="text-blue-500 text-xl">up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">With bkash payment only</h2>
                        <p className="text-blue-500 text-xl">up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
