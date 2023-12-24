import { GoogleLogout } from "react-google-login";

export default function Logout() {
    const clientId =
    "787282536842-njbudlcbr4c9p739eep6ggv0nkuodh46.apps.googleusercontent.com";

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
