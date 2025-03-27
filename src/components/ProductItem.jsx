function ProductItem ({ product }) {
    return <div className="product-item">
        <h2 className="product-name">{product.name}</h2>
        <img className="product-image" src={product.photo} />
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
    </div>;
};

export default ProductItem;