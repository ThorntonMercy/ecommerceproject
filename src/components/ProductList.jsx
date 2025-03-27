import { useState } from 'react'
import ProductItem from './ProductItem';
import BrandFilter from './BrandFilter';

function ProductList({ products }) {
    const [filteredBrand, setFilteredBrand] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(products);

    return (<div>
        <BrandFilter products={products} onBrandChange={setFilteredBrand} />
        {
            products.filter(product => !filteredBrand || product.brand == filteredBrand)
                .map(product => <ProductItem product={product} />)
        }
    </div>);
}

export default ProductList; 