import {
    loadReviews,
    addAReview,
    deleteAReview,
    clearReviews
} from '../../store/reviews';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getASingleGym, deleteGym, updateGym } from "../../store/gyms";
import { useParams, useHistory, Link } from 'react-router-dom';
import './index.css';



function SingleGym() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const gym = useSelector((state) => state.gyms[id]);
    // const user = useSelector((state) => state.session.user);
    // const reviews = Object.values(useSelector((state) => state.reviews));
    // const [review, setReview] = useState([]);
    // const [isLoaded, setLoaded] = useState(false);
    // const [validationErrors, setValidationErrors] = useState([]);

    // useEffect(() => {
    //     dispatch(getASingleGym(id))
    //         .then(async () => await dispatch(loadReviews(id)))
    //         .then(() => setLoaded(true));

    //     return () => {
    //         dispatch(clearReviews());
    //     };
    // }, [id, dispatch]);

    const deleteAGym = (id) => {
        dispatch(deleteGym(id));
        history.push('/gyms');
    };

    // const notLoggedIn = () => {
    //     if (!user) history.push('/');
    // };

    const updateAGym = (id) => {
        dispatch(updateGym(id));
        history.push('/gyms');
    };

    if (!gym) return null;



    return (
        <div>
            <h1 className="name-of-gym">{gym.title}</h1>
            <h1>Location</h1>
            <h2 className="location">{gym.location}</h2>
            <h2>About the Gym</h2>
            <h3 className="description">{gym.description}</h3>
            <h3>Sponsored By</h3>
            <h4 className="sponsor">{gym.brandId}</h4>
            {/* <h1>Reviews</h1>
            <div className="reviews">
                {reviews &&
                    reviews.map((review) => {
                        return (
                            <div className='new-review-div' key={review.id}>
                                <p className='p-tag-reviews'>
                                    {review?.review}
                                </p>
                                <p className='p-tag-username'>
                                    {review?.User?.username}
                                </p>
                                <div className='delete-button-container'>
                                    {review?.User?.username === user?.username ? (
                                        <button
                                            className='delete-review-button'
                                            onClick={() =>
                                                dispatch(
                                                    deleteAReview(id, review.id)
                                                ).then(() => dispatch(loadReviews(id)))
                                            }
                                        >
                                            Delete
                                        </button>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        )
                    })}
            </div> */}
            <div className="buttons">
                    <div className="update">
                        <button onClick={updateAGym}>Update</button>
                    </div>
                    <div className="delete">
                        <button onClick={deleteAGym}>Delete</button>
                    </div>
            </div>
        </div>
    )
};

export default SingleGym;
