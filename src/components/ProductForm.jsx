import { useRef } from 'react';

// Uncontrolled component
// simpler. Direct data management. Improve performance. Closer to traditional HTML

const ProductForm = () => {
    const nameRef = useRef(null);
    const priceRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        console.log('Submitted product:', { name, price });
        // hhandle the form submission
        // send data to an API updating state in a parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add/Edit Product</h3>
            <label>
                Name:
                <input type="text" ref={nameRef} />
            </label>
            <br />
            <label>
                Price:
                <input type="number" ref={priceRef} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}


export default ProductForm;