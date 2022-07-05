import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateGym, getGyms } from '../../store/gyms';

function EditGym({ hideForm }) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [brandId, setBrandId] = useState(1);
    // const [errors, setErrors] = useState([]);
    const url = useParams();

    const gymId = url.id;

    const dispatch = useDispatch();

    const updateTitle = (e) => setTitle(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateBrandId = (e) => setBrandId(e.target.value);

    useEffect(() => {
        dispatch(getGyms())
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            gymId,
            title,
            location,
            description,
            brandId: 1,
        };

        let updatedGym = await dispatch(updateGym(payload));
        if (updatedGym) {
            // hideForm();
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        // hideForm();
    };

    return (
        <section className="edit-form-holder centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={updateTitle}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={updateLocation}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={updateDescription}
                />
                {/* <select onChange={updateBrandId} value={brandId}>
                    {brandId.map(brand =>
                        <option key={brand.id}>{brand.id}</option>
                    )}
                </select> */}
                <button type="submit" onClick={updateGym}>Update Gym</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

export default EditGym;
