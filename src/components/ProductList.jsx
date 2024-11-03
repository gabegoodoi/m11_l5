import { useState, useEffect } from 'react';
import { number } from 'prop-types';

const ProductList = ({ orderId }) => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        if (orderId) {
            // make an API call to get all of our products associated with our order ID
            const fetchedProducts = [
                { id: 'A123', name: 'Coffee' },
                { id: 'B456', name: 'Croissant' },
            ];
            // Set our products array to be equal to our fetched products
            setProducts(fetchedProducts);

        }
    }, [orderId]);

    return (
        <div className="product-list">
            <h3>Products</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} (ID: {product.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    orderId: number
}

export default ProductList;