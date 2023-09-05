import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import {
  CheckUserExistsLayoutProps,
} from '@/components/page-layouts/CheckUserExistsLayout/CheckUserExistsLayout.types';

export const CheckUserExistsLayout: React.FC<CheckUserExistsLayoutProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user.payload);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('login');
    }
  }, [user]);

  if (!user) {
    return <></>;
  }

  return (
    <>
      { children }
    </>
  );
};
