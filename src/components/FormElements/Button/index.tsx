/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { BsQuestion } from 'react-icons/bs';
import { Popover, PopoverBody } from 'reactstrap';
import { Btn, BtnInfo } from './styles';

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: 'submit' | 'button' | 'reset';
}

interface ButtonInfoProps {
  message: string;
}

const Button: React.FC<Props> = ({ text, type, ...rest }) => (
  <Btn {...rest} type={type}>
    {text}
  </Btn>
);

export const ButtonInformation: React.FC<ButtonInfoProps> = ({ message }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <BtnInfo id='popover' type='button'>
        <BsQuestion />
      </BtnInfo>

      <Popover
        placement='bottom'
        isOpen={popoverOpen}
        target='popover'
        toggle={toggle}
      >
        <PopoverBody>{message}</PopoverBody>
      </Popover>
    </>
  );
};

export default Button;
