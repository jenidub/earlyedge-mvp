import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNav from "./components/AuthLayer/Auth0Provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <BrowserRouter>
        <Auth0ProviderWithNav>
            <App />
        </Auth0ProviderWithNav>
    </BrowserRouter>
);
