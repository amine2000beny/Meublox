import ObjectsList from '../objectsList/ObjectsList';
import './Products.scss';
import { useEffect, useState } from 'react';

const Products = () => {

    const [allData, setAllData] = useState([])
    const [isLoad, setIsLoad] = useState(false)


    useEffect(() => {

        const callAPI = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            let response = await fetch(`${process.env.REACT_APP_API_URL}/products`, requestOptions);
            const responseInJSON = await response.json();
            setAllData(responseInJSON)
            setIsLoad(true)
        }

        callAPI()
    }, [])

    return (
        <div className='full-page'>
            {isLoad ?
                <>
                    <h3><a href='/'>Home</a></h3>
                    <h1>Tous les Produits</h1>
                    <div className='trait'></div>
                    <div className='all-products-page'>
                        <ObjectsList allData={allData} />
                    </div>
                </> :
                <h2 className='loading'>Loading</h2>
            }
        </div>
    )
}

export default Products;