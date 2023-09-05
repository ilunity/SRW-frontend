import React, { useEffect, useState } from 'react';
import { AddIngredientForm } from 'src/components/forms/IngredientsForm/AddIngredientForm';
import { IProductData } from '@/api/interfaces/products.types';
import { useDispatch, useSelector } from 'react-redux';
import { AddIngredientInputs } from '@/components/forms/IngredientsForm/AddIngredientForm/AddIngredientForm.types';
import { addIngredient } from '@/redux/slices/created-recipe';
import { executeRequest } from '@/api/utils';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { RootState } from '@/redux/store';
import { IngredientItem } from '@/components/forms/IngredientsForm/AddIngredientForm/IngredientItem';
import { CenterModal } from 'src/components/layouts/CenterModal';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { productsService } from '@/api/services';


export const IngredientsForm: React.FC = () => {
  const [openAddIngredientModal, setOpenAddIngredientModal] = useState<boolean>(false);
  const [products, setProducts] = useState<IProductData[]>([]);

  const dispatch = useDispatch();
  const selectedProducts = useSelector((state: RootState) => state.createdRecipe.ingredients);

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await executeRequest(productsService.get);
      if (data) {
        setProducts(data);
      }
    };

    loadProducts();
  }, []);

  const handleAddIngredient = (data: AddIngredientInputs) => {
    const { ingredient, ...measurements } = data;

    dispatch(addIngredient({
      ...ingredient,
      ...measurements,
    }));

    setOpenAddIngredientModal(false);
  };

  return (
    <>
      <CenterModal
        open={ openAddIngredientModal }
        onClose={ () => setOpenAddIngredientModal(false) }
        title={ 'Добавить ингредиент' }
      >
        <AddIngredientForm
          products={ products }
          onSubmit={ handleAddIngredient }
        />
      </CenterModal>
      <Card sx={ { borderRadius: 3 } }>
        <CardHeader
          title={ 'Ингредиенты:' }
          action={ <AddBtn title={ 'Добавить ингредиент' } onClick={ () => setOpenAddIngredientModal(true) } /> }
        />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align={ 'right' }>Количество</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { selectedProducts.map(product => (<IngredientItem key={ product.id } product={ product } />)) }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
