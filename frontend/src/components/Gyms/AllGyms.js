import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import CreateGymForm from './CreateGymForm';

import { getGyms } from '../../store/gyms';

function Gyms() {
    const dispatch = useDispatch();
    const gymsObject = useSelector((state) => state.gyms);
    console.log(gymsObject);
    const gyms = Object.values(gymsObject);

    console.log(gyms);

    useEffect(() => {
        dispatch(getGyms)
    }, [dispatch]);

    return (
        <main>
            <h1>Look at the Gyms!</h1>
            <div>
                {gyms.map((gym) => {
                    <div key={gym.id}>
                        <h2>{gym.title}</h2>
                        <NavLink to={`/gyms/${gym.id}`}/>
                    </div>
                })}
            </div>
            {/* <div>
                <CreateGymForm />
            </div> */}
        </main>
    )
};

export default Gyms;
