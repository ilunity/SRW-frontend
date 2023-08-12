import { authService } from '@/api/services';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@/api/utils';
import { getEmptyLayout } from '@/utils/layouts';
import { TokenAuthPage } from 'src/components/TokenAuthPage';
import { TokenAuthPageProps } from '@/components/TokenAuthPage/Auth.types';

export default function SignUp(authProps: TokenAuthPageProps) {
  return (<TokenAuthPage { ...authProps } />);
}

SignUp.getLayout = getEmptyLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.query.token as string;

  const props = {} as TokenAuthPageProps;

  const { data, error } = await executeRequest(() => authService.register(token));

  if (data) {
    props.userData = data;
    props.token = token;
  } else {
    props.error = error;
  }

  return { props };
};
