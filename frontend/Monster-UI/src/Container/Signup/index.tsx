import SignupForm from "./components/signupForm";
import ContentBar from "../../components/ContentBar";
function Signup() {
  return (
    <ContentBar page="sign up">
      <h1>Sign UP</h1>
      <SignupForm />
    </ContentBar>
  );
}

export default Signup;
