import React from 'react';
import Spinner from '../Spinner';

import { Sucess, Error } from './styles';

export interface ParamsLoadStatus {
  status: 'sucess' | 'error' | 'loading' | 'none' | 'invalid';
}

const LoadStatus: React.FC<ParamsLoadStatus> = ({ status }) => {
  if (status === 'loading') {
    return <Spinner />;
  }
  if (status === 'sucess') {
    return <Sucess>Seu cadastro foi efetuado com sucesso!</Sucess>;
  }
  if (status === 'error') {
    return <Error>Falha ao cadastrar, tente novamente!</Error>;
  }
  if (status === 'invalid') {
    return <Error>Preencha atentamente todos os campos!</Error>;
  }
  return <></>;
};

export default LoadStatus;
