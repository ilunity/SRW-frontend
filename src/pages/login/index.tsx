import * as React from 'react';
import { getEmptyLayout } from '@/utils/layouts';
import { AuthPage } from '@/components/AuthPage';


export default function LogIn() {
  return (<AuthPage variant={ 'login' } />);
}

LogIn.getLayout = getEmptyLayout;
