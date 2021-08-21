import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentLevel1 } from './ComponentLevel1';
import { TestComponentProps, XContext } from './types';

export const xContext = React.createContext<XContext | null>(null);

export const TestComponent: React.FC<TestComponentProps> = ({ n }) => {
  const [value, setValue] = useState(0);

  //готовим объект для контекста
  const xContextData = { value, setValue };

  return (
    <xContext.Provider value={xContextData}>
      <Wrap>
        <div>TestContextObject: №{n}</div>
        <div>
          <ComponentLevel1 />
        </div>
      </Wrap>
    </xContext.Provider>
  );
};

const Wrap = styled.div`
  border: 3px solid red;
  padding: 5px;
  margin-top: 10px;
  display: grid;
  grid-gap: 20px;
`;
