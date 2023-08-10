import { useDispatch } from 'react-redux';
import { clearUser } from '@/redux/slices';

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearUser());
  };
  return logout;
};
