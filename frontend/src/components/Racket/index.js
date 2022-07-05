import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getRacket, removeRacket } from '../../store/rackets';

function SingleRacket() {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const racket = useSelector((state) => state.rackets[id]);

    useEffect(() => {
        dispatch(getRacket(id))
    }, [id, dispatch]);

    const deleteRacket = (id) => {
        dispatch(removeRacket(id));
        history.push(`/rackets`);
    };

    if (!racket) return null;

    return (
        <div>
            <h1 className='name-of-racket'>{racket.name}</h1>
            <h2 className='brandId'>{racket.brandId}</h2>
            <h3 className='description'>{racket.description}</h3>
            <button onClick={() => deleteRacket(id)}>Delete</button>
        </div>
    )
};

export default SingleRacket;
