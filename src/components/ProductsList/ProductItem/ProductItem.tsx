import React, { useState } from 'react';
import { ProductItemProps } from './ProductItem.types';
import { Avatar, Card, CardHeader, Typography } from '@mui/material';
import { EditBtn } from '@/components/icon-buttons/EditBtn';
import { UpdateProductModal } from '@/components/dashboards/ProductsDashboard/UpdateProductModal';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const ProductItem: React.FC<ProductItemProps> = (
  {
    product,
    updateProducts,
  }) => {
  const [openUpdateProductForm, setOpenUpdateProductForm] = useState<boolean>(false);

  return (
    <>
      <UpdateProductModal
        open={ openUpdateProductForm }
        onClose={ () => setOpenUpdateProductForm(false) }
        onSuccess={ updateProducts }
        product={ product }
      />
      <Card
        variant={ 'outlined' }
        sx={ {
          borderRadius: 3,
        } }
      >
        <CardHeader
          sx={ {
            py: 1,
          } }
          title={
            <Typography variant={ 'subtitle1' }>
              { product.name }
            </Typography>
          }
          action={
            <EditBtn
              title={ 'Изменить продукт' }
              size={ 'small' }
              onClick={ () => setOpenUpdateProductForm(true) }
            />
          }
          avatar={
            <Avatar
              alt={ `Картинка ${ product.name }` }
              src={ HOST + product.img }
              variant={ 'rounded' }
              sx={ {
                width: 24,
                height: 24,
              } }
            >
              { product.name[0].toUpperCase() }
            </Avatar>
          }
        />
      </Card>
    </>
  );
};
