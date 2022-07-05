import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRacket, getRackets } from "../../store/rackets";
import { Link } from 'react-router-dom';
import CreateRacketForm from "./CreateRacketForm";

function Rackets() {
    const dispatch = useDispatch();
    const racketsObject = useSelector((state) => state.rackets);
    const rackets = Object.values(racketsObject);

    useEffect(() => {
        dispatch(getRackets())
    }, [dispatch]);

    const handleClick = (id) => {
        dispatch(getRacket(id))
    }


    return (
        <div className="index-racket-page">
            <h1>Rackets</h1>
            <div>
                {rackets.map((racket) => {
                    return <div key={racket.id}>
                        <Link exact to={`/rackets/${racket.id}`} onClick={() => handleClick(racket.id)}>{racket.name}</Link>
                    </div>
                })}
            </div>
            <h1>Tell us about your favorite racket!</h1>
            <div>
                <CreateRacketForm />
            </div>
        </div>
    )
}

export default Rackets;
