import React, { useContext } from 'react';
import styled from 'styled-components';
import { xContext } from './TestComponent';

export const ComponentLevel2: React.FC = () => {
  const ctx = useContext(xContext);
  //это проверка на случай если контекст еще не создан
  if (ctx === null) {
    return null;
  }

  const handleTestBtnClk = () => {
    const newValue = ctx.value - 1;
    ctx.setValue(newValue);
  };

  return (
    <Wrap>
      <div>ComponentLevel2</div>
      <div>
        <Button type={'submit'} onClick={handleTestBtnClk}>
          value - 1
        </Button>
      </div>
      <div>
        <div>{JSON.stringify(ctx, null, 2)}</div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 3px solid green;
  display: grid;
  grid-gap: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px;
`;
