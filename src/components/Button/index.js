import React from 'react';

import { ButtonWrapper, ButtonText } from './styled';

export const Button = ({ onPress, name, outline, primary, disabled}) => {
  return (
    <ButtonWrapper
      onPress={onPress}
      primary={primary}
      outline={outline}
      disabled={disabled}
    >
      <ButtonText
        primary={primary}
        outline={outline}
      >
        {name}
      </ButtonText>
    </ButtonWrapper>
  )
}
