import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from './Context';

const Homepage = () => {

    const { profileInfo, signedIn, name, currentUser, setCurrentUser } = useContext(Context);

    const history = useHistory();
    
    useEffect(() => {
        if (signedIn) {
            for (let i = 0; i < profileInfo.length; i++) {
                if (profileInfo[i].name.toLowerCase() === name.toLowerCase().trim()) {
                    setCurrentUser(profileInfo[i])
                }
            }
        }
    },[signedIn, name, profileInfo, setCurrentUser]);

    return (
        <Container>
            <Title>All Facespace members</Title>
            <ImageWrapper>
                {profileInfo?.map((item, index) => {
                    return (
                        <ImageDiv
                            key={index}
                            onClick={() => {
                                history.push(`/${item.id}`);
                            }}
                        >
                            <Image src={item.avatarUrl} />
                            {currentUser?.friends.includes(item.id) && <Ribbon>Friend</Ribbon>}
                        </ImageDiv>
                    )
                })}
            </ImageWrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    padding: 85px 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1500px) {
        margin-left: 40px;
    }

    @media (max-width: 625px) {
        padding: 85px 10px;
    }
`;

const Title = styled.h1`
    color: var(--primary-color);
    font-family: var(--heading-font-family);
    font-size: 36px;
    text-align: left;

    @media (max-width: 400px) {
        font-size: 28px;
        margin-left: 20px;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ImageDiv = styled.div`
    border: 5px transparent solid;
    width: 175px;
    height: 175px;
    border: 2px var(--primary-color) solid;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 10px;

    :hover {
        border: none;
        cursor: pointer;
        border: 8px var(--primary-color) solid;
    }

    @media (max-width: 625px) {
        width: 160px;
        height: 160px;
    }

    @media (max-width: 400px) {
        margin-left: 60px;
    }
`;

const Image = styled.img`
    width: 175px;
    height: 175px;

    @media (max-width: 625px) {
        width: 160px;
        height: 160px;
    }
`;

const Ribbon = styled.div`
    margin-top: -165px;
    margin-left: 65px;
    color: white;
    font-family: var(--heading-font-family);
    text-align: center;
    width: 150px;
    padding: 10px;
    background-color: var(--primary-color);
    transform: rotate(45deg);
`;
export default Homepage;