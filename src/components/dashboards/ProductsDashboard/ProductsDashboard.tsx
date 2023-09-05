import React, { useState } from 'react';
import { Box, Card, CardContent, CardHeader, Stack, useMediaQuery } from '@mui/material';
import { useApiRequest } from '@/api/utils';
import { productsService } from '@/api/services';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { Search } from '@/components/Search';
import { ProductsList } from '@/components/ProductsList';
import { CreateProductModal } from '@/components/dashboards/ProductsDashboard/CreateProductModal';
import { PageContainer } from '@/components/PageContainer';
import { Theme } from '@mui/system';

export const ProductsDashboard: React.FC = () => {
  const [updateProductsCounter, setUpdateProductsCounter] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [openCreateProductForm, setOpenCreateProductForm] = useState<boolean>(false);

  const mediaQuerySm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const { data: products } = useApiRequest(productsService.get, { deps: [updateProductsCounter] });
  const updateProducts = () => setUpdateProductsCounter(prevState => prevState + 1);

  return (
    <PageContainer>
      <CreateProductModal
        open={ openCreateProductForm }
        onClose={ () => setOpenCreateProductForm(false) }
        onSuccess={ updateProducts }
      />
      <Card sx={ { borderRadius: 3, width: '100%' } }>
        <CardHeader
          sx={ {
            '.MuiCardHeader-subheader': {
              mt: 2,
            },
          } }
          title={ 'Продукты:' }
          action={
            <Stack direction={ 'row' } spacing={ 1 }>
              { mediaQuerySm &&
                <Search value={ query } onChange={ event => setQuery(event.target.value) } />
              }
              <AddBtn title={ 'Добавить продукт' } onClick={ () => setOpenCreateProductForm(true) } />
            </Stack>
          }
          subheader={
            !mediaQuerySm
              ? (
                <Box sx={ { maxWidth: '90%' } }>
                  <Search value={ query } onChange={ event => setQuery(event.target.value) } />
                </Box>
              ) : null
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
    </PageContainer>
  );
};
