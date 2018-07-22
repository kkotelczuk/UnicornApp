import React from 'react';

import { ButtonWrapper, ButtonText } from './styled';

export const Button = ({ onPress, name, icon, ...otherProps }) => {
  return (
    <ButtonWrapper
      onPress={onPress}
      {...otherProps}
    >
      {icon}
      {name &&
        <ButtonText {...otherProps}>
          {name}
        </ButtonText>
        }
    </ButtonWrapper>
  )
}
