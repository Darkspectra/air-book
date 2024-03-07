import img1 from "../../assets/Airlines/a1.png";
import img2 from "../../assets/Airlines/a2.png";
import img3 from "../../assets/Airlines/a3.png";
import img4 from "../../assets/Airlines/a4.png";
import img5 from "../../assets/Airlines/a5.png";
import img6 from "../../assets/Airlines/a6.png";

const Popular = () => {
    return (
        <div className="mx-4 my-4 md:mx-10 lg:mx-20 xl:mx-40">
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-2 md:p-4'>Popular Airlines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img6} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img6} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Biman Bangladesh Airlines</h2>
                        <div className="rating rating-xs items-center">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <p>753 Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Popular;