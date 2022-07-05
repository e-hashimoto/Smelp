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
import EditGym from "../EditGym";



function SingleGym() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const gym = useSelector((state) => state.gyms[id]);


    useEffect(() => {
        dispatch(getASingleGym(id));
    }, [id, dispatch]);

    const deleteAGym = (id) => {
        dispatch(deleteGym(id));
        history.push(`/gyms`);
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
            <div>
                <EditGym />
            </div>
            <button onClick={() => deleteAGym(id)}>Delete</button>
        </div>
    )
};

export default SingleGym;
