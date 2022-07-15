import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from './Context';
import { useHistory } from 'react-router-dom';

const SignInPage = () => {

    const { signedIn, setSignedIn, name, setName } = useContext(Context);

    const history = useHistory();

    const handleSubmit = () => {
        if (name !== "") {
            setSignedIn(true);
            history.push(`/`);
        }
    }

    if (signedIn) {
        history.push(`/`);
    }

    return (
        <Container>
            {!signedIn ? <Wrapper>
                <Form>
                    <Input onChange={(e) => setName(e.target.value)} type="text" placeholder="Your first name" required/>
                    <Submit onClick={handleSubmit} type="submit">Submit</Submit>
                </Form>
                <Background src="./images/facespace_bg.jpg" alt="facespace-background" />
            </Wrapper>
            : <Wrapper>
                <Text>
                    Hi {name}! Looks like you are already signed in. Click on the Facespace logo to access your homepage.
                </Text>
                <CoverShade />
                <Background src="./images/facespace_bg.jpg" alt="facespace-background" />
            </Wrapper>}
        </Container>
    )
}

const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    z-index: 2;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, .5);;
    color: white;
    width: 400px;
    height: 200px;
`;

const Input = styled.input`
    font-size: 24px;
    padding: 10px 10px;
    width: 300px;
    margin-bottom: 20px;
`;

const Submit = styled.button`
    font-size: 24px;
    width: 320px;
    padding: 5px 0;
    font-family: var(--heading-font-family);
    color: white;
    background-color: var(--primary-color);
    border: none;
    border-radius: 4px;

    :hover {
        cursor: pointer;
        transform: scale(0.975);
    }
`;

const Text = styled.p`
    z-index: 999;
    width: 75%;
    font-size: 36px;
    text-align: center;
    color: var(--primary-color);
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
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
`;

export default SignInPage;