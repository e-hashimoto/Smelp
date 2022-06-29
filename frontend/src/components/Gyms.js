import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getGym } from '../../src/store/gyms';

const Gyms = () => {
    const dispatch = useDispatch();
    const { gymId } = useParams();
    const gym = useSelector(state => {
        return state.gym.list.map(gymId => state.gym[gymId]);
    });

    useEffect(() => {
        dispatch(getGym());
    }, [dispatch]);

    if (!gym) return null;

    return (
        <div>
            <h1>Gyms</h1>
        </div>
    )
};

export default Gyms;
