import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Stack } from '@mui/material';
import { MyRecipes } from '@/components/MyRecipes';
import { FavouriteRecipes } from '@/components/FavouriteRecipes';
import { ProfilePanel } from '@/components/ProfilePanel';
import { LayoutConstructor } from '@/utils/layout-constructor';

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.payload);

  if (user) {
    return (
      <Stack spacing={ 8 }>
        <ProfilePanel user={ user } />
        <MyRecipes user={ user } />
        <FavouriteRecipes />
      </Stack>
    );
  }
}

Profile.layout = new LayoutConstructor().standard().checkUserExists();
