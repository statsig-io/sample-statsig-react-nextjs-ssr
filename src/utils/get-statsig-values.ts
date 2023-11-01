import Statsig, { StatsigUser } from 'statsig-node';

export async function getStatsigValues(
  user: StatsigUser,
): Promise<Record<string, unknown> | null> {
  await Statsig.initialize(
    'secret-IiDuNzovZ5z9x75BEjyZ4Y2evYa94CJ9zNtDViKBVdv',
  );

  return Statsig.getClientInitializeResponse(user);
}
