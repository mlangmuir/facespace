import usePersistedState from "./usePersistedState";
import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

export const Provider = ({ children }) => {

    const [signedIn, setSignedIn] = usePersistedState("signIn", false);
    const [name, setName] = usePersistedState("name", "");
    const [profileInfo, setProfileInfo] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users`)
            .then((res) => res.json())
            .then((data) => {
                setProfileInfo(data.data);
            }).catch((error) => {
                console.log(error)
            })
    },[]);

    return (
        <Context.Provider
            value={{ signedIn, setSignedIn, name, setName, profileInfo, setProfileInfo, currentUser, setCurrentUser }}
        >
            {children}
        </Context.Provider>
    );
}