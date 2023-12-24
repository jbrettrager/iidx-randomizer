import { GoogleLogout } from "react-google-login";

export default function Logout() {
    const clientId =
    "client-id";

    function onSuccess() {
        console.log("Logged out")
    }

    return (
        <div>
            <GoogleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            /> 
        </div>
    )
}
