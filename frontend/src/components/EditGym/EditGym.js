import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/gyms";

function EditGym() {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [brandId, setBrandId] = useState(1);

    

    // const history = useHistory();

    useEffect(() => {
        dispatch()
    })
}

export default EditGym;
