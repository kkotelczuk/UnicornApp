import React from 'react';

import { Wrapper, BannerText, } from './styled';

export const Banner = ({ isSuccess, errorMessage, successMessage }) => {
  return (
    <Wrapper
      isSuccess={isSuccess}
    >
      <BannerText>
        {isSuccess ? successMessage : errorMessage}
      </BannerText>
    </Wrapper>
  )
}
