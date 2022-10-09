import { WrapWithButtonComponent } from "./hoc/WrapWithButtonComponent";
import TextInputField from "./components/TextInputField";
import FormController from "./components/form/FormController";

const buttonProps = {
  type: "verify",
  action: {
    httpMethod: "GET",
    requestURL:
      "https2://www.gogetthisandadatthendisagain.io/request&intense=1499999&timeout=3/",
    payload: {},
    params: [{ key: "orderType" }],
  },
};

function App() {
  const MyAlphaHOC = WrapWithButtonComponent(TextInputField);
  return (
    <div className="App">
      {/* <MyAlphaHOC
        age={25}
        firstName={"Button+Input"}
        buttonProps={buttonProps}
      />
      <MyAlphaHOC age={45} firstName={"Input"} /> */}

      <FormController
        field={{
          type: "input",
          value: "Verify On Behalf",
        }}
        buttonProps={{
          type: "verify",
          action: {
            httpMethod: "GET",
            requestURL:
              "https2://www.gogetthisandadatthendisagain.io/request&intense=1499999&timeout=3/",
            payload: {},
            params: [{ key: "orderType" }],
          },
        }}
      />
    </div>
  );
}

export default App;
