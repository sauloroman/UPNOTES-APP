import React, { useRef } from 'react';

export const InputVerify: React.FC = () => {
  let ref = useRef<HTMLInputElement | any>();

  const onChangeInputNumber = (e: React.ChangeEvent) => {
    const nextInput = e.target.nextSibling;
    ref.current = nextInput;
    ref.current.focus();
  };
  return (
    <input
      onChange={onChangeInputNumber}
      min={1}
      max={9}
      type="number"
      className="form-verify__input"
    />
  );
};
