import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root{
    --primarySmall: #495057;
    --primaryMiddle: #343a40;
    --primaryStrong: #212529;

    --secondarySmall: #f8f9fa;
    --secondaryMiddle: #e9ecef;
    --secondaryStrong: #dee2e6;

    --mainSmall: #3a6ea5;
    --mainStrong: #1d3557;

  }

  @media screen and (max-width: 1080px){
    html{
        font-size: 93.75%;
        }
    }

  @media screen and (max-width: 720px){
    html{
        font-size: 87.05%;
        }
    }

  body{
    background: var(--primaryStrong);
    color: var(--secondaryStrong);
    overflow-x: hidden;
  }

  body::-webkit-scrollbar{
        width: 8px;
        background: var(--primarySmall);
    }

  body::-webkit-scrollbar-thumb{
      border-radius: 4px;
      background: var(--secondaryStrong);
  }
`

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
