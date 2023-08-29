import React, { useEffect, useState } from 'react';
import { ProductsListProps } from './ProductsList.types';
import { ProductItem } from '@/components/ProductsList/ProductItem';
import { Stack } from '@mui/material';
import { IProductData } from '@/api/interfaces/products.types';

export const ProductsList: React.FC<ProductsListProps> = ({ query, products, updateProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState<IProductData[]>(products);

  useEffect(() => {
    setFilteredProducts(products.filter(product => {
      const productLowercase = product.name.toLowerCase();
      const queryLowercase = query.toLowerCase();
      return productLowercase.includes(queryLowercase);
    }));
  }, [query]);

  return (
    <Stack spacing={ 0.5 }>
      { products !== null &&
        filteredProducts.map((product) =>
          <ProductItem
            key={ product.id }
            product={ product }
            updateProducts={ updateProducts }
          />,
        )
      }
    </Stack>
  );
};
