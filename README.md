React E-Commerce Project


The task was to create a simply styled e-commerce app with React, utilizing components, props, and useState. I opted to do the two bonus “challenges” of creating a category filter (brand category) and to add an image to each product listing. 

I have simple CSS styling to create a light blue container with gently spaced, visibly separated products that display a product name, description, image, and price. 

My components include App, ProductList, ProductItem, and BrandFilter. 

The App component holds our actual product list, with information such as id, product name, description, category, image, etc. 

The BrandFilter component takes the list of products and filters based off of user input. 

The ProductList component filters the product array and will show all products if there has been no filter selected. If there has been a filter selected, it will only return products that match the selected filter. After processing the filter component, it maps through the matching products to return individual elements to the ProductItem component. 

The ProductItem component handles the styling for how the app is to display the returned product listings. 

Together it creates a simplistic app displaying three visually different products. 
