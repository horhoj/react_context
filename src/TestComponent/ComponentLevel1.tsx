import React, { useContext } from 'react';

import styled from 'styled-components';
import { xContext } from './TestComponent';
import { ComponentLevel2 } from './ComponentLevel2';

export const ComponentLevel1: React.FC = () => {
  const ctx = useContext(xContext);

  //это проверка на случай если контекст еще не создан
  if (ctx === null) {
    return null;
  }

  const handleTestBtnClk = () => {
    const newValue = ctx.value + 1;
    ctx.setValue(newValue);
  };

  return (
    <Wrap>
      <div>ComponentLevel1</div>
      <div>
        <Button type={'submit'} onClick={handleTestBtnClk}>
          value + 1
        </Button>
      </div>
      <div>{JSON.stringify(ctx, null, 2)}</div>
      <div>
        <ComponentLevel2 />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 3px solid blue;
  display: grid;
  grid-gap: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px;
`;
