import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { Divider, Stack } from '@mui/material';
import { ProfileInfo } from 'src/components/ProfileInfo';
import { MyRecipes } from '@/components/MyRecipes';
import { IRecipePreview } from '@/api/interfaces/recipes.types';
import { executeRequest } from '@/api/utils';
import { recipesService } from '@/api/services/recipes.service';
import { LogoutBtn } from '@/components/icon-buttons/LogoutBtn';
import { USER_ROLE } from '@/utils/types';
import Button from '@mui/material/Button';

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.payload);
  const [recipes, setRecipes] = useState<IRecipePreview[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadRecipes = async () => {
      const { data } = await executeRequest(recipesService.getMy);
      if (data) {
        setRecipes(data);
      }
    };

    if (!user) {
      router.push('login');
    } else {
      loadRecipes();
    }
  }, [user]);

  if (!user) {
    return <></>;
  }

  return (
    <Stack spacing={ 8 }>
      <Stack
        direction={ 'row' }
        sx={ {
          justifyContent: 'space-between',
        } }
      >
        <ProfileInfo user={ user } />
        <Stack spacing={ 1 }>
          { user.role === USER_ROLE.ADMIN &&
            <>
              <Button
                variant={ 'outlined' }
                color={ 'success' }
                href={ '/recipes/moderate' }
              >
                Рецепты на модерации
              </Button>
              <Divider orientation={ 'horizontal' } />
            </>
          }
          <Stack sx={ { alignItems: 'end' } }>
            <LogoutBtn />
          </Stack>
        </Stack>
      </Stack>
      <MyRecipes recipes={ recipes } />
    </Stack>
  );
}
