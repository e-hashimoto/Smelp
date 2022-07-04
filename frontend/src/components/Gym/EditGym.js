import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function EditGym() {
    const dispatch = useDispatch();
    const gymId = useParams().id;
    const sessionUser = useSelector((state) => state.session.user);

    const gym = useSelector((state) => state.gym[userId]);

    const [gymTitle, setGymTitle] = useState(`${gym.title}`);
    const [gymDescription, setGymDescription] = useState('');

    const history = useHistory();

    useEffect(() => {
        dispatch()
    })
}

export default EditGym;
