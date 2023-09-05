import { TokenAuthPageProps } from '@/components/TokenAuthPage/Auth.types';
import { TokenAuthPage } from 'src/components/TokenAuthPage';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@/api/utils';
import { authService } from '@/api/services';
import { LayoutConstructor } from '@/utils/layout-constructor';

export default function LogIn(authProps: TokenAuthPageProps) {
  return (<TokenAuthPage { ...authProps } />);
}

LogIn.layout = new LayoutConstructor().empty();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.query.token as string;

  const props = {} as TokenAuthPageProps;

  const { data, error } = await executeRequest(() => authService.profile(token));

  if (data) {
    props.userData = data;
    props.token = token;
  } else {
    props.error = error;
  }

  return { props };
};
