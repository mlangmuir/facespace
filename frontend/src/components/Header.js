import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Context';

const Header = () => {

    const { signedIn, name } = useContext(Context);

    return (
        <NavBar>
            <TitleNavLink to='/'>
                <Title>Facespace</Title>
            </TitleNavLink>
            <LinkDiv>
                {
                    signedIn ?
                        <StyledNavLink exact to='/'>
                            Howdy, {name}
                        </StyledNavLink>
                        : <StyledNavLink exact to='/sign-in'>
                            Sign in
                        </StyledNavLink>
                }
            </LinkDiv>
        </NavBar>
    )
}

const NavBar = styled.nav`
    background-color: var(--primary-color);;
    position: fixed;
    z-index: 999;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    height: 60px;
    font-weight: 700;
    font-family: var(--heading-font-family);
`;

const TitleNavLink = styled(NavLink) `
    height: 60px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
`;

const Title = styled.span`
    font-size: 40px;
    font-weight: 700;
    margin-left: 30px;

    @media (max-width: 625px) {
        font-size: 32px;
        margin-left: 10px;
    }
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-right: 40px;

    @media (max-width: 625px) {
        margin-right: 10px;
    }
`;

const StyledNavLink = styled(NavLink)`
    font-size: 22px;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 625px) {
        font-size: 16px;
    }
`;

export default Header;