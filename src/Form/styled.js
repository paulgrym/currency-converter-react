import styled from "styled-components";

export const StyledForm = styled.form`
  text-align: center;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primaryColor};
  text-shadow: 1px 2px 5px hsl(0, 0%, 90%);
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 30px 0;
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  margin: 0 0 10px 0;
  text-align: left;
  display:inline-block;
  max-width:80px;
  width:100%;
`;

export const FormField = styled.input`
  border: solid 2px hsl(0, 5%, 65%);
  border-radius: 5px;
  padding: 5px;
  max-width:250px;
  width:100%;

  &:read-only {
    background-color: hsla(0, 7%, 81%, 0.411);
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: white;
  padding: 10px 20px;
  border: solid 2px  ${({ theme }) => theme.colors.primaryColor};
  text-shadow: 1px 1px 2px hsl(0, 0%, 20%);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 3px;
  width: 100%;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
    transform: scale(1.02);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.activeColor};
  }
`;

export const Spinner = styled.div`
    display: block;
    margin:20px auto;
    width: 60px;
    height: 60px;
    border: 7px solid #ddd;
    border-left-color: ${({ theme }) => theme.colors.primaryColor};
    border-right-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    animation: LoadingSpinner 1s linear infinite;

    @keyframes LoadingSpinner {
    to {transform: rotate(360deg);}
    }
`

export const LoadingText = styled.p`
  font-size: 20px;
  line-height:1.4;
`
export const ErrorText = styled(LoadingText)`
  color: hsl(346, 97%, 46%);
`