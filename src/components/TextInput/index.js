import React from 'react';

import { InputWrapper, Label, Input, ErrorWrapper } from './styled';

export const TextInput = ({ label, type, onChange, placeholder, onEndEditing, error }) => {
  return (
    <InputWrapper>
      <Label>
        {label}
      </Label>
      <Input
        secureTextEntry={type === 'password'}
        onChangeText={onChange}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
    </InputWrapper>
  )
}
