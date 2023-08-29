import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { useApiRequest } from '@/api/utils';
import { productsService } from '@/api/services';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { Search } from '@/components/Search';
import { ProductsList } from '@/components/ProductsList';
import { CreateProductModal } from '@/components/dashboards/ProductsDashboard/CreateProductModal';

export const ProductsDashboard: React.FC = () => {
  const [updateProductsCounter, setUpdateProductsCounter] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [openCreateProductForm, setOpenCreateProductForm] = useState<boolean>(false);

  const { data: products } = useApiRequest(productsService.get, [updateProductsCounter]);
  const updateProducts = () => setUpdateProductsCounter(prevState => prevState + 1);

  return (
    <Stack spacing={ 8 }>
      <CreateProductModal
        open={ openCreateProductForm }
        onClose={ () => setOpenCreateProductForm(false) }
        onSuccess={ updateProducts }
      />
      <Card
        sx={ {
          borderRadius: 3,
          width: 850,
        } }
      >
        <CardHeader
          title={ 'Продукты:' }
          action={
            <Stack direction={ 'row' } spacing={ 1 }>
              <Search value={ query } onChange={ event => setQuery(event.target.value) } />
              <AddBtn title={ 'Добавить продукт' } onClick={ () => setOpenCreateProductForm(true) } />
            </Stack>
          }
        />
        <CardContent>
          <Stack spacing={ 0.5 }>
            { products !== null &&
              <ProductsList
                query={ query }
                products={ products }
                updateProducts={ () => setUpdateProductsCounter(prevState => prevState + 1) }
              />
            }
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
