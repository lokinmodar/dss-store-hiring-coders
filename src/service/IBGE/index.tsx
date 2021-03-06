/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export async function fetchCitiesFromUF(
  idUf: number
): Promise<{ value: any; label: any }[]> {
  try {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios`;
    const response = await axios.get<ICities[]>(url);

    return response.data.map((city) => ({
      value: city.id,
      label: city.nome
    }));
  } catch (error) {
    throw new Error('Falha ao buscar as cidades');
  }

  /*
    Return example:
    [
      {value: 11, label: "São Paulo"},
      {value: 23, label: "Rio de Janeiro"},
      {value: 34, label: "Maranhão"}
    ]
  */
}

export async function fetchUFs(): Promise<{ value: any; label: any }[]> {
  try {
    const response = await axios.get<IUFs[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );
    return response.data.map((uf: { id: any; nome: any }) => ({
      value: uf.id,
      label: uf.nome
    }));
  } catch (error) {
    throw new Error('Falha ao buscar Estados brasileiros');
  }

  /*
    Return example:
    [
      {value: 1010, label: "Santos"},
      {value: 1111, label: "São Vicente"},
      {value: 3445, label: "Praia Grande"}
    ]
  */
}

export interface ICities {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: IUFs;
    };
  };
}

export interface IUFs {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}
