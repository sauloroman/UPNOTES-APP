import React, { useState } from 'react';

interface InputPasswordProps {
  value: string;
  onChange: ( newValue: React.ChangeEvent<HTMLInputElement> ) => void; 
}

export const InputPassword: React.FC<InputPasswordProps> = ({ 
  value, 
  onChange 
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  return (
    <div className="form__field">
      <label htmlFor="user-password" className="form__label">
        Contraseña
      </label>

      <div className="form__field--password">
        <input
          name='password'
          value={value}
          onChange={ onChange }
          className="form__input form__input--password"
          id="user-password"
          type={`${isPasswordShown ? 'text' : 'password'}`}
          placeholder="Ingresa tu contraseña"
        />
        <i
          onClick={() => setIsPasswordShown(!isPasswordShown)}
          className={`bx bx-${
            isPasswordShown ? 'low-vision' : 'show'
          } icon icon--form`}
        ></i>
      </div>
    </div>
  );
};
