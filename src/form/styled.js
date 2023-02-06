import styled from "styled-components";
import { css } from "styled-components";

export const Header = styled.h1`
    font-size: 32px;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: center;
    text-transform: uppercase;
`

export const Container = styled.form`
    background-color: ${({ theme }) => theme.color.gunpowder};
    padding: 15px;
    border-radius: 15px;
`

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.white};

    ${({rateinfo}) => rateinfo && css`
        text-align: center;
    `}
`

export const Button = styled.button`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.terracotta};
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 10px 20px;
    margin-top: 5px;
    width: 100%;
`

export const Input = styled.input`
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    width: 100%;
`

export const Fieldset = styled.fieldset`
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.terracotta};
    margin-bottom: 6px;
    overflow-x: auto;
`