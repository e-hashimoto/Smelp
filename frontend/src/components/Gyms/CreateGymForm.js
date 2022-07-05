import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGym } from "../../store/gyms";
// import { csrfFetch } from "../../store/csrf";

const CreateGymForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const brands = useSelector(state => state.brand.names)
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [brandName, setBrandName] = useState(null);
    const [brandId, setBrandId] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateBrandName = (e) => setBrandName(e.target.value);

    useEffect(() => {

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            location,
            description,
            brandId: 1
        };

        let createdGym = await dispatch(createGym(payload));
        if (createdGym) {
            history.push(`/gyms/${createdGym.id}`);
        }
        // const response = await csrfFetch('/api/gyms', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload)
        // });

        console.log('                     This should be working')
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
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
                <select>
                    1
                </select>
                <button type="submit">Create New Gym</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}

export default CreateGymForm;
