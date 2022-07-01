import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getASingleGym } from "../../store/gyms";

function SingleGym() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getASingleGym())
    }, [dispatch]);

    return (
        <div>
            
        </div>
    )
};

export default SingleGym;
