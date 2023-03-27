import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-add-to-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;