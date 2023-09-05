import * as React from 'react';
import { AuthPage } from '@/components/AuthPage';
import { LayoutConstructor } from '@/utils/layout-constructor';

export default function SignUp() {
  return (<AuthPage variant={ 'signup' } />);
}

SignUp.layout = new LayoutConstructor().empty();
