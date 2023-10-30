import styled from "styled-components";
import Backgroud from './assets/backgroud1.svg'

export const Container = styled.div`
    background: url("${Backgroud}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    /* height: 100vh; */
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    border-radius: 61px 61px 0px 0px;

    background: linear-gradient(
        157deg,
        rgba(255, 255, 255, 0.60) 0.84%,
        rgba(255, 255, 255, 0.60) 0.85%,
        rgba(255, 255, 255, 0.15) 100%);

        padding: 50px 36px;
        display: flex;
        flex-direction: column;

        height: 100vh;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.408px;

    margin-left: 25px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    margin-bottom: 34px;
    border: none;
    outline: none;
    padding-left: 25px;
    
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Button = styled.button`
    border-radius: 14px;
    background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
    width: 342px;
    height: 74px;
    border: none;
    outline: none;

    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;

    // Arrow
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    outline: none;
    border: none;
    border-radius: 14px;



    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;
