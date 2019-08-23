import React, { useEffect } from 'react';
import Container from '../components/Container';
import Router from './Router';

export interface AppProps {
  version?: string;
}

const App: React.FC<AppProps> = props => {
  const { version } = props;

  useEffect(() => {
    document.title = `HackSoc Core v${version || '0.0.0'}`;
  });

  return (
    <Container>
      <Router />
    </Container>
  );
};

export default App;
