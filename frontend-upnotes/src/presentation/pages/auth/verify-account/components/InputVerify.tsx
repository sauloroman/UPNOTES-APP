import React, { useRef } from 'react';

interface InputVerifyProps {
  nameBox: string,
  valueBox: any,
  onInputChange: (e: React.ChangeEvent) => void
}


export const InputVerify: React.FC<InputVerifyProps> = ({ nameBox, valueBox, onInputChange }) => {
  let ref = useRef<HTMLInputElement | any>();

  const onChangeInputNumber = (e: React.ChangeEvent) => {
    const nextInput = e.target.nextSibling;
    onInputChange( e )

    if ( nextInput ) {
      ref.current = nextInput;
      ref.current.focus();
    }
  };

  return (
    <input
      value={valueBox}
      name={nameBox}
      onChange={onChangeInputNumber}
      min={1}
      max={9}
      type="number"
      className="form-verify__input"
    />
  );
};
