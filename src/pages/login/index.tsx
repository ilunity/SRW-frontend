import * as React from 'react';
import { AuthPage } from '@/components/AuthPage';
import { LayoutConstructor } from '@/utils/layout-constructor';

export default function LogIn() {
  return (<AuthPage variant={ 'login' } />);
}

LogIn.layout = new LayoutConstructor().empty();
