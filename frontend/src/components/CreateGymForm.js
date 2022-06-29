import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateGym = ({hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [brandId, setBrandId] = useState(null);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateBrandId = (e) => setBrandId(e.target.value);

    useEffect(() => {
        dispatch()
    })
}
