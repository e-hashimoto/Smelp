import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getASingleGym, deleteGym, updateGym } from "../../store/gyms";
import { useParams, useHistory } from 'react-router-dom';
import './index.css';
import ShuttleRating from "../ShuttleRating";


function SingleGym() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const gym = useSelector((state) => state.gyms[id]);
    // const account = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getASingleGym(id))
    }, [dispatch, id]);

    const deleteAGym = (id) => {
        dispatch(deleteGym(id));
        history.push('/gyms');
    };

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
            {/* <div>
                <ShuttleRating />
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
