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
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  margin: 0 0 10px 0;
  text-align: left;
  flex-basis: 130px;
`;

export const FormField = styled.input`
  border: solid 2px hsl(0, 5%, 65%);
  border-radius: 5px;
  padding: 5px;
  flex-grow: 1;

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