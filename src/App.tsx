import React from 'react';
import { Container } from './GlobalStyles';
import { TestComponent } from './TestComponent';

export const App: React.FC = () => {
  return (
    <Container>
      <TestComponent n={1} />
      <TestComponent n={2} />
      <TestComponent n={3} />
      <TestComponent n={4} />
      <TestComponent n={5} />
    </Container>
  );
};
