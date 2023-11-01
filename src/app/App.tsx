'use client';

import {
  StatsigProvider,
  StatsigSynchronousProvider,
  StatsigUser,
  useGate,
} from 'statsig-react';

const CLIENT_KEY = 'client-rfLvYGag3eyU0jYW5zcIJTQip7GXxSrhOFN69IGMjvq';

function Content() {
  const { value } = useGate('a_gate');
  return <>a_gate: {value ? 'Passing' : 'Failing'}</>;
}

export default function App({
  user,
  values,
}: {
  user: StatsigUser;
  values: Record<string, unknown> | null;
}): JSX.Element {
  if (values == null) {
    return (
      <StatsigProvider sdkKey={CLIENT_KEY} user={user}>
        <div>StatsigProvider</div>
        <Content />
      </StatsigProvider>
    );
  }

  return (
    <StatsigSynchronousProvider
      sdkKey={CLIENT_KEY}
      initializeValues={values}
      user={user}
    >
      <div>StatsigSynchronousProvider</div>
      <Content />
    </StatsigSynchronousProvider>
  );
}
