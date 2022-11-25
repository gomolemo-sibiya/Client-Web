import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background-color: #F8F8FA;
    display: flex;
    justify-content: center;
    color: #1A1A1A;
`;

export const Wrapper = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    box-sizing: border-box;
    height: auto;
    padding: 40px;
    width: 450px;
    box-shadow: 5px 5px 15px 5px  rgb(53 72 91 / 8%);
`;

export const Heading = styled.p`
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 30px;
`;

export const Input = styled.input`
    height: 100%;
    position: relative;
    width: 100%;
    background-color: #F8F8FA;
    border-radius: 5px;
    border: 0;
    box-sizing: border-box;
    color: #757575;
    font-size: 14px;
    outline: 0;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #DEDEDE;
}
`;

export const Submit = styled.div`
    width: 100%;
    margin: 20px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    

    .addBtn, .backBtn {
        width: 100%;
        border: 0;
        border-radius: 5px;
        box-sizing: border-box;
        color: #eee;
        cursor: pointer;
        font-size: 16px;
        height: 100%;
        outline: 0;
        padding: 10px;
        background-color: #F8F8FA;
    }

    .addBtn {
        margin-left: 10px;
        background-color: #3DCBB1;
    }

    .backBtn {
        margin-right: 10px;
        color: #757575;
        background-color: #DEDEDE;
    }
`;