import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRacket } from "../../store/rackets";

const CreateRacketForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [brandId, setBrandId] = useState('');
    const [description, setDescription] = useState("");

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

    useEffect(() => {

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const  payload = {
            name,
            brandId: 1,
            description,
            userId: 1
        };

        let createdRacket = await dispatch(createRacket(payload));
        if (createdRacket) {
            history.push(`/rackets/${createdRacket.id}`);
        };

    }
        const handleCancelClick = (e) => {
            e.preventDefault();
            // hideForm();
        };

    return (
        <section className="new-racket">
            <h1>Add a Racket to our Database</h1>
            <form className="create-racket-form" onSubmit={handleSubmit}>
                <input
                    type="string"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={updateName}
                />
                <input
                    type="string"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={updateDescription}
                />
                <button type="submit">Add Racket</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
};

export default CreateRacketForm;
