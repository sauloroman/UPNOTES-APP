import React from 'react';
import { InputVerify } from './InputVerify';

export const InputList: React.FC = () => {
  return (
    <div className="flex flex-between u-margin-bottom-medium">
      {
        new Array(5).fill(null).map( _ => (
          <InputVerify />
        ))
      }
    </div>
  );
};
