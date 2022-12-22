import styled from "styled-components";

export const UserIconWithName = (props) => {
    const {image, name} = props;

    return (
        <SContainer>

            <SImg src={image} alt={name} />
            <SName>{name}</SName>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;

const SImg = styled.img`
    border-radius: 50%;
    height:160px;
    width:120px;
`;

const SName = styled.p`
    font-size:18px;
    font-weight: bold;
    margin: 0;
    color:#40514e;
`;
