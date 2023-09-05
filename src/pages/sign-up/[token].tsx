import { authService } from '@/api/services';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@/api/utils';
import { TokenAuthPage } from 'src/components/TokenAuthPage';
import { TokenAuthPageProps } from '@/components/TokenAuthPage/Auth.types';
import { LayoutConstructor } from '@/utils/layout-constructor';

export default function SignUp(authProps: TokenAuthPageProps) {
  return (<TokenAuthPage { ...authProps } />);
}

SignUp.layout = new LayoutConstructor().empty();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const signUpToken = context.query.token as string;

  const props = {} as TokenAuthPageProps;

  const { data, error } = await executeRequest(() => authService.register(signUpToken));

  if (data) {
    const { token, ...userData } = data;
    props.userData = userData;
    props.token = token;
  } else {
    props.error = error;
  }

  return { props };
};
