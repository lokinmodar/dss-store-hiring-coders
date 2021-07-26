/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useEffect,
  useState,
  FormEvent,
  FunctionComponent
} from 'react';

import { fetchCitiesFromUF } from '../../service/IBGE';
import { getUFsLocalJson } from '../../service/IBGE/localDatabase';
import LoadStatus from '../LoadStatus';

import { Button, Input, InputMasked, Select } from '../FormElements';
import {
  Page,
  Form,
  ContentForm,
  InputsContainer,
  Region
} from './Elements/styles';
import './index.scss';

const CustomerSignupForm: FunctionComponent = () => {
  const [UFs, setUFs] = useState<any>([]);
  const [cities, setCities] = useState<any>([]);
  const [selectUF, setSelectUF] = useState<string>('');
  const [selectCity, setSelectCity] = useState<string>('');
  const [statusForm, setStatusForm] = useState<
    'sucess' | 'error' | 'loading' | 'none' | 'invalid'
  >('none');

  const [formdata, setFormdata] = useState({
    primeiroNome: '',
    sobrenome: '',
    telefone: '',
    whatsapp: '',
    cidade: '',
    estado: '',
    endereco: ''
  });
  const [errorFormData, setErrorFormData] = useState({
    primeiroNome: false,
    sobrenome: false,
    telefone: false,
    cidade: false,
    estado: false,
    endereco: false
  });

  useEffect(() => {
    const value = getUFsLocalJson();
    setUFs(value);
  }, []);

  useEffect(() => {
    if (selectUF !== '') {
      fetchCitiesFromUF(Number(selectUF)).then((value) => setCities(value));
    }
  }, [selectUF]);

  function resetErrors() {
    setErrorFormData({
      primeiroNome: false,
      sobrenome: false,
      telefone: false,
      cidade: false,
      estado: false,
      endereco: false
    });
  }

  function handleInvalidInputs(): boolean {
    resetErrors();

    let hasErrors = false;
    let cloneErrorForm = errorFormData;

    const arrayObjForm = [
      { name: 'endereco', value: formdata.endereco },
      { name: 'sobrenome', value: formdata.sobrenome },
      { name: 'primeiroNome', value: formdata.primeiroNome },
      { name: 'telefone', value: formdata.telefone },
      { name: 'cidade', value: formdata.cidade },
      { name: 'estado', value: formdata.estado }
    ];

    function isEmpty(value: string | null): boolean {
      if (value === null || String(value) === '' || String(value).length <= 0) {
        return true;
      }

      return false;
    }
    arrayObjForm.forEach((element): void => {
      const { name, value } = element;
      if (isEmpty(value)) {
        cloneErrorForm = { ...cloneErrorForm, [name]: true };
        hasErrors = true;
      }
    });

    setErrorFormData(cloneErrorForm);

    return hasErrors;
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    setStatusForm('loading');

    if (handleInvalidInputs()) {
      setStatusForm('invalid');
      return;
    }

    // Remover este setTimeout
    setTimeout(() => {
      resetErrors();
      setStatusForm('sucess');

      const data = {
        ...formdata
      };

      localStorage.setItem('CustomerData', JSON.stringify(data));

      // console.info('DADOS DO FORMULÁRIO ', data);
    }, 1000);
  }

  return (
    <>
      <Page>
        <Form onSubmit={handleSubmitForm}>
          <ContentForm>
            <InputsContainer>
              <Input
                label='Primeiro Nome'
                name='primeiroNome'
                placeholder=''
                error={errorFormData.primeiroNome}
                helperText='Insira seu Nome'
                onChange={(e) => {
                  const { value } = e.target;
                  setFormdata({
                    ...formdata,
                    primeiroNome: value
                  });
                }}
              />

              <Input
                label='Sobrenome'
                name='sobrenome'
                placeholder=''
                error={errorFormData.sobrenome}
                helperText='Insira seu sobrenome'
                onChange={(e) => {
                  const { value } = e.target;
                  setFormdata({
                    ...formdata,
                    sobrenome: value
                  });
                }}
              />

              <InputMasked
                mask='(99) 9999-9999'
                label='Telefone fixo'
                type='tel'
                name='telefone'
                placeholder=''
                error={errorFormData.telefone}
                helperText='Insira um telefone válido'
                onChange={(e) => {
                  const { value } = e.target;
                  setFormdata({
                    ...formdata,
                    telefone: value
                  });
                }}
              />

              <Input
                name='whatsapp'
                label='Telefone celular'
                type='tel'
                maxLength={13}
                minLength={12}
                secondLabel='(Opcional)'
                placeholder=''
                error={false}
                onChange={(e) => {
                  const { value } = e.target;
                  setFormdata({
                    ...formdata,
                    whatsapp: value
                  });
                }}
              />

              <Region>
                <Input
                  label='Endereço'
                  name='endereco'
                  error={errorFormData.endereco}
                  helperText='Insira seu endereço'
                  placeholder=''
                  onChange={(e) => {
                    const { value } = e.target;
                    setFormdata({
                      ...formdata,
                      endereco: value
                    });
                  }}
                />

                <Select
                  name='estado'
                  label='Estado'
                  placeholder='Selecione o Estado'
                  value={selectUF}
                  options={UFs}
                  error={errorFormData.estado}
                  helperText='Selecione o Estado'
                  onChange={(e) => {
                    const idUF = e.target.value;
                    const index = e.target.selectedIndex;
                    const nameUF = e.target[index].textContent;
                    setFormdata({ ...formdata, estado: nameUF ?? idUF });
                    setSelectUF(idUF);
                  }}
                />

                {selectUF !== '' && (
                  <Select
                    name='cidade'
                    label='Cidade'
                    placeholder='Selecione a cidade'
                    error={errorFormData.cidade}
                    helperText='Selecione a cidade'
                    value={selectCity}
                    onChange={(e) => {
                      const index = e.target.selectedIndex;
                      const nameCity = e.target[index].textContent;
                      setSelectCity(e.target.value);
                      setFormdata({ ...formdata, cidade: nameCity ?? '-' });
                    }}
                    options={cities}
                  />
                )}
              </Region>

              <Button text='Cadastrar' type='submit' />
              <LoadStatus status={statusForm} />
            </InputsContainer>
          </ContentForm>
        </Form>
      </Page>
    </>
  );
};

export default CustomerSignupForm;
