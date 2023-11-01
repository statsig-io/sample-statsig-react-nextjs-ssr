import { getStatsigValues } from '@/utils/get-statsig-values';
import App from './App';

export default async function Home(): Promise<JSX.Element> {
  const user = { userID: 'a-user' };

  const values = await getStatsigValues(user);

  return <App user={user} values={values} />;
}
