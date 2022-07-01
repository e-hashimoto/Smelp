import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGym } from "../../store/gyms";

const CreateGymForm = ({hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const brands = useSelector(state => state.brand.names)
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [brandName, setBrandName] = useState(null);
    const [brandId, setBrandId] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateBrandName = (e) => setBrandName(e.target.value);

    // useEffect(() => {
    //     dispatch(getBrands());
    // }, [dispatch]);

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
            <h1>Add your Gym for the Community!</h1>
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
                <select onChange={updateBrandName} value={null} placeholder="Sponsored By">
                    <option value={null}></option>
                    {brands.map(brand =>
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                    )}
                </select>
                <button type="submit">Create New Gym</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}

export default CreateGymForm;
