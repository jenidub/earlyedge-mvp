import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavProps = {
    children: any;
}

const Auth0ProviderWithNav: React.FC<Auth0ProviderWithNavProps> = ({children}) => {
    const navigate = useNavigate();
    const domain: string = "dev-6bunlpvvbvqr1bu3.us.auth0.com";
    const clientId: string = "ZlmZqKoFotKv3OzR7uWc18kR3jVY6CIX";
    const redirectUri: string = "http://localhost:5173/callback";
    
    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{redirect_uri: redirectUri, scope: "open profile email"}}
            onRedirectCallback={onRedirectCallback}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNav;
