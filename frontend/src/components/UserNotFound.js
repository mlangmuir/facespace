import styled from "styled-components";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const UserNotFound = () => {

    const [loading, setLoading] = useState(false);

    const loadingTime = () => {
        setLoading(true);
    }

    setTimeout(loadingTime, 3000);

    return (
        <Wrapper onLoad={loadingTime}>
            {!loading ? <LoadingSpinner />
                : <>
                    <TextDiv>
                        <h1>404</h1>
                        <p>The page you want is not defined.</p>
                    </TextDiv>
                    <CoverShade />
                    <Background src="./images/facespace_bg.jpg" />
                </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const TextDiv = styled.div`
    z-index: 3;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    font-size: 32px;
    font-family: var(--heading-font-family);
`;

const CoverShade = styled.div`
    z-index: 2;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: black;
    opacity: 70%;
`;

const Background = styled.img`
    z-index: 1;
    position: fixed;
    height: 100vh;
    width: 100%;
    object-fit: cover;
`;

export default UserNotFound;