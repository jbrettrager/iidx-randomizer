import { GoogleLogin } from "react-google-login";

export default function Login() {
  const clientId =
    "client-id";
  const clientSecret = "client-secret";
  const redirectURI = "http://localhost:3000/";

  function onSuccess(res: any) {
    console.log("WE GOOD BRUH! Current User: ", res.profileObj);
  }

  function onFailure(res: any) {
    console.log("WE NOT GOOD BRUH res: ", res);
  }
  return (
    <div>
      <GoogleLogin 
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Authorize"
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
       />
    </div>
  );
}
