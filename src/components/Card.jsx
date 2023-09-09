// import PropTypes from "prop-types"
// Card.propTypes = {
//     title: PropTypes.string,
//     views: PropTypes.string
// };


const Card = ({ item }) => {
    console.log(item);
    const { name, jobDescription } = item;
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">React Components</h2>
                    <p className="text-red-400">If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /></figure>
                <div className="flex justify-between mt-2">
                    <p className='text-left'><small className="text-xl ">{name}</small></p>
                    <p className="text-start">{jobDescription}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;