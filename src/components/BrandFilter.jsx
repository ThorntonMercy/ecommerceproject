import { useState } from 'react'

function BrandFilter({ products, onBrandChange }) {

    const [brands, setBrands] = useState(products.map(product => product.brand));

    const handleFilterChange = (event) => {
        const value = event.target.value;
        if (value == 'No filter') {
            onBrandChange(null)
        } else {
            onBrandChange(value)
        }
    }

    return (<select onChange={handleFilterChange}>
            <option value={null} key={null}>No filter</option>
            {brands.map(brandName => <option value={brandName} key={brandName}>{brandName}</option>)}
        </select>);
}

export default BrandFilter; 