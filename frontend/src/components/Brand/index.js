import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBrand } from "../../store/brands";

function SingleBrand() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const brand = useSelector((state) => state.brands[id]);

    useEffect(() => {
        dispatch(getBrand(id))
    }, [dispatch, id]);

    

    if (!brand) return;

    return (
        <div>
            <h1>{brand.name}</h1>
            <h2 className="brand-label">Where they Hail From</h2>
            <h2>{brand.country}</h2>
            <h3 className="brand-about">About the Brand</h3>
            <h3>{brand.description}</h3>
            <h4 className="who-is-sponsored">Notable Athletes</h4>
            <h4>{brand.notableAthletes}</h4>
        </div>
    )
};

export default SingleBrand;
