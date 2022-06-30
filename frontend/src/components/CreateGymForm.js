import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGym, getBrands } from "../store/gyms";

const CreateGymForm = ({hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const brands = useSelector(state => state.brand.names)
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [brandId, setBrandId] = useState(null);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateBrandId = (e) => setBrandId(e.target.value);

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    useEffect(() => {
        if (brands.length && !brandId) {
            setBrandId(brandId) === null;
        }
    }, [brandId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            location,
            description,
            brandId
        };

        let createdGym = await dispatch(createGym(payload));
        if (createdGym) {
            history.push(`/gyms/${createdGym.id}`);
            hideForm();
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    }

    return (
        <section className="new-form-gym">
            <form className="create-gym-form" onSubmit={handleSubmit}>
                <input
                    type="string"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={updateTitle}/>
                <input
                    type="string"
                    placeholder="Location"
                    required
                    value={location}
                    onChange={updateLocation}/>
                <input
                    type="description"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={updateDescription}/>
                <select onChange={updateBrandId} value={brandId}>
                    {brandId}

            </form>
        </section>
    )
}

export default CreateGymForm;
