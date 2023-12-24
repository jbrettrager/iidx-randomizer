import { GoogleLogin } from "react-google-login";

export default function Login() {
  const clientId =
    "787282536842-njbudlcbr4c9p739eep6ggv0nkuodh46.apps.googleusercontent.com";
  const clientSecret = "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";
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
