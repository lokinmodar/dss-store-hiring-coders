import styled from 'styled-components';

export const Page = styled.section`
  max-width: 90%;
  min-width: 90%;
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: var(--color-ice);
`;

export const Form = styled.form`
  min-width: 90%;
  max-width: 90%;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  @media screen and (max-width: 450px) {
    padding: 24px 16px;
  }
`;

export const Title = styled.legend`
  font-size: 24px;
  color: var(--color-blue-dark);
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
`;

export const ContainerAddMoreCities = styled.div`
  padding-bottom: 8px;
  margin-bottom: 16px;
  width: 80%;
  display: flex;
  justify-content: space-between;

  span {
    color: var(--text);
    font-size: 14px;
  }
`;

export const BtnAddMoreCities = styled.button`
  font-size: 14px;
  color: var(--color-blue);
  background: none;
  outline: none !important;
  border: none !important;
`;

export const Inline = styled.div`
  display: inline-flex !important;

  button {
    margin-right: 8px;
  }
`;

export const Logo = styled.img`
  width: 80%;
  height: auto;
  min-height: 60px;
  margin-bottom: 24px;
`;

export const InputsContainer = styled.section``;

export const ContentForm = styled.fieldset``;

export const Region = styled.div``;
