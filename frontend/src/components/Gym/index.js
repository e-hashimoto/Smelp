import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getASingleGym, deleteGym } from "../../store/gyms";
import { useParams, useHistory } from 'react-router-dom';


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

    if (!gym) return null;

    return (
        <div>
            <h1 className="name-of-gym">{gym.title}</h1>
            <h1>Location</h1>
            <h2>{gym.location}</h2>
            <h2>About the Gym</h2>
            <h3>{gym.description}</h3>
            <h3>Sponsored By</h3>
            <h4>{gym.brandId}</h4>
            <button onSubmit={deleteAGym}>Delete</button>
        </div>
    )
};

export default SingleGym;
