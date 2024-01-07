import { useEffect, useState } from 'react';


const API = () => {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            .then((response) => response.json())
            .then((data) => setProducts(data.Items));
    }, [])




    return [products, setProducts]
};


export default API;