import styled from 'styled-components';

const SectionContainer = styled.section`
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-width: 90%;
  border-radius: 6px;
  color: #fff;
  margin: 0 auto;
  min-height: 82vh;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  #content {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 90%;
    min-width: 90%;

    min-height: 90%;
    margin-top: 15px;
    margin-bottom: 15px;

    margin-left: auto;
    margin-right: auto;

    h2 {
      font-family: 'Yanone Kaffeesatz', 'Noto Mono', 'Arial Narrow', sans-serif;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 15px;
    }

    h1 {
      font-family: 'Yanone Kaffeesatz', 'Noto Mono', 'Arial Narrow', sans-serif;
      font-weight: 400;
      font-size: 28px;
      margin-bottom: 15px;
      text-align: left;
    }

    p {
      text-align: left;
      line-height: 1.4;
      margin-bottom: 10px;
    }

    .productList {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .productListHome {
      min-width: 100%;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 700px) {
    #content {
      text-align: center;

      .cardcontent {
        width: 100%;
      }
      .carousel {
        margin-top: 35%;
        width: 100%;
        min-height: 60%;
        img {
          //margin-top: 4vh;
          max-width: 80%;
          //max-height: 450px;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    #content {
      text-align: center;

      .cardcontent {
        min-width: 45%;
      }
      .carousel {
        margin-top: 35%;
        width: 100%;
        min-height: 60%;
        img {
          //margin-top: 4vh;
          max-width: 80%;
          //max-height: 450px;
        }
      }
    }
  }
`;

export default SectionContainer;
