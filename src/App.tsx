import { useWithExtraInfo as HocWithExtraProps } from "./hoc/useWithExtraInfo";
import TextInputField from "./components/TextInputField";

const buttonProps = {
  label: "Verify",
  action: {
    type: "verify",
    url: "https://sdk.internal.itg.hp.com/getVerificationEmailId",
  },
};

function App() {
  const MyAlphaHOC = HocWithExtraProps(TextInputField);
  return (
    <div className="App">
      <MyAlphaHOC
        age={25}
        firstName={"Button+Input"}
        buttonProps={buttonProps}
      />
      <MyAlphaHOC age={45} firstName={"Input"} />
    </div>
  );
}

export default App;
