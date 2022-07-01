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
        dispatch(getGyms())
    }, [dispatch]);

    return (
        <main>
            <h1>Look at the Gyms!</h1>
            <div>
                {gyms.map((gym) => {
                    return <div key={gym.id}>
                        <NavLink exact to={`/gyms/${gym.id}`}>{gym.title}</NavLink>
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
