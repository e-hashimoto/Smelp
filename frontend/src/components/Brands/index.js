import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  './index.css';
import { getBrands, getBrand } from '../../store/brands';
import {Link} from 'react-router-dom';


function Brands() {
    const dispatch = useDispatch();
    const brandsObject = useSelector((state) => state.brands);
    const brands = Object.values(brandsObject);

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    const handleClick = (id) => {
        dispatch(getBrand(id));
    };

    return (
        <>
            <div className='brands-homepage' id='entire-brands-page'>
                <h1>Brands</h1>
                <div>
                    {brands.map((brand) => {
                        return <div key={brand.id}>
                            <Link exact to={`/brands/${brand.id}`} onClick={() => handleClick(brand.id)}>{brand.name}</Link>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Brands;
