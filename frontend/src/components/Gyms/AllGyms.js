import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateGymForm from './CreateGymForm';
import './index.css';

import { getASingleGym, getGyms } from '../../store/gyms';

function Gyms() {
    const dispatch = useDispatch();
    const gymsObject = useSelector((state) => state.gyms);
    const gyms = Object.values(gymsObject);


    useEffect(() => {
        dispatch(getGyms())
    }, [dispatch]);

    const handleClick = (id) => {
        dispatch(getASingleGym(id))
    }

    return (
        <main className='index-page'>
            <h1>Look at the Gyms!</h1>
            <div>
                {gyms.map((gym) => {
                    return <div key={gym.id}>
                        <Link exact to={`/gyms/${gym.id}`} onClick={() => handleClick(gym.id) }>{gym.title}</Link>
                    </div>
                })}
            </div>
            <h1>Don't see your gym here already?  Tell us about it!</h1>
            <div>
                <CreateGymForm />
            </div>
        </main>
    )
};

export default Gyms;
