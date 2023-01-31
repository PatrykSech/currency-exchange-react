import styled from "styled-components";

export const Currencies = styled.select`
    border: none;
    border-radius: 10px;
    padding: 6px 10px;
    background-color: ${({ theme }) => theme.color.terracotta};
    color: ${({ theme }) => theme.color.white};
`