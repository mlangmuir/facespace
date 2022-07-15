import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from './Context';
import UserNotFound from './UserNotFound';

const Profile = () => {

    const { id } = useParams();

    const history = useHistory();

    const { profileInfo } = useContext(Context);

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`/api/users/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setUserInfo(data.data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    },[id]);

    return (
        <>
            {(id === userInfo.id) ?
                <div>
                    <Background src="./images/facespace_bg.jpg" alt="facespace-background" />
                        <Wrapper>
                            <ImageNameDiv>
                                <Image src={userInfo.avatarUrl} />
                                <Name>{userInfo.name}</Name>
                            </ImageNameDiv>
                            <FriendsTitle>{userInfo.name}'s Friends</FriendsTitle>
                            <FriendsDiv>
                                {profileInfo.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {userInfo.friends?.includes(item.id) &&
                                                <FriendsImageDiv
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        history.push(`/${item.id}`);
                                                    }}
                                                >
                                                    <FriendsName>{item.name}</FriendsName>
                                                    <FriendsImages src={item.avatarUrl} />
                                                </FriendsImageDiv>
                                            }
                                        </div>
                                    )
                                })}
                            </FriendsDiv>
                        </Wrapper>
                    </div>
                : <UserNotFound />
            }
        </>
    )
}

const Background = styled.img`
    z-index: 0;
    width: 100vw;
    max-height: 450px;
    object-fit: cover;
    position: absolute;
`;

const Wrapper = styled.div`
    padding: 0 15%;
`;

const ImageNameDiv = styled.div`
    display: flex;
    margin-bottom: 75px;
`;

const Image = styled.img`
    width: 350px;
    position: relative;
    margin-top: 275px;
    border: 10px var(--primary-color) solid;

    @media (max-width: 625px) {
        width: 175px;
        height: 175px;
    }
`;

const Name = styled.h1`
    z-index: 1;
    font-size: 42px;
    margin-top: 460px;
    margin-left: 15px;

    @media (max-width: 625px) {
        margin-top: 370px;
        font-size: 32px;
    }
`;

const FriendsTitle = styled.h2`
`;

const FriendsDiv = styled.div`
    display: flex;
    margin-bottom: 100px;
    border-top: 2px var(--primary-color) solid;

    @media (max-width: 625px) {
        flex-direction: column;
    }
`;

const FriendsImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-right: 20px;
    border: 5px transparent solid;
    width: 200px;
    height: 200px;
    border: 2px var(--primary-color) solid;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 30px;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media (max-width: 625px) {
        width: 150px;
        height: 150px;
    }
`;

const FriendsName = styled.p`
    position: absolute;
    color: black;
    background-color: white;
    width: 196px;
    text-align: center;
    padding: 5px 0;
    opacity: 70%;
    font-weight: 700;
`;

const FriendsImages = styled.img`
    width: 200px;
    height: 200px;

    @media (max-width: 625px) {
        width: 150px;
        height: 150px;
    }
`;

export default Profile;