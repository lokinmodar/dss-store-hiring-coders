/* eslint-disable max-len */
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

const Pattern = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  width: 90%;
  padding: 14px 16px;
  max-height: 54px;
  background: #fff;
  border: 2px solid var(--input-border-default);
  color: #020202;
  outline: none;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #a9a9a9;
    font-size: 14px;
  }

  &:active,
  &:focus {
    border-color: var(--input-border-active);
  }

  &:invalid,
  &.error {
    border-color: var(--input-border-error);
  }
`;

export const InputFileContainer = styled.div`
  width: 90%;
  margin-bottom: 12px;
  display: block;

  p {
    font-size: 12px;
    color: var(--color-text);
  }

  label {
    color: var(--color-blue);
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const InputContainer = styled.input`
  ${Pattern}
`;

export const InputMaskedContainer = styled(InputMask)`
  ${Pattern}
`;

export const SelectContainer = styled.select`
  ${Pattern}
`;

export const InputBlock = styled.div`
  margin-bottom: 16px;
  width: 100%;
  input {
    width: 100%;
  }
`;

export const ErrorBlock = styled.div`
  background: var(--alert-error-background);
  color: var(--color-red);
  display: flex;
  align-items: center;
  width: 90%;
  padding: 14px 16px;
  height: 54px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 8px;
`;
