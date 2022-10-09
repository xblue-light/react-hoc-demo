import { WrapWithButtonComponent } from "./hoc/WrapWithButtonComponent";
import TextInputField from "./components/TextInputField";
import FormController, { ButtonType } from "./components/form/FormController";

function App() {
  const MyAlphaHOC = WrapWithButtonComponent<ButtonType>(TextInputField);
  return (
    <div className="App">
      <MyAlphaHOC
        field={{
          type: "input",
          value: "Verify Email",
        }}
        buttonProps={{
          type: "verify",
          action: {
            httpMethod: "POST",
            requestURL:
              "https2://www.gogetthisandadatthendisagain.io/request&intense=1499999&timeout=3/",
            payload: { email: "koreal@ipsum.co" },
            params: [{ key: "orderType" }],
          },
        }}
      />

      {/* <FormController
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
      /> */}
    </div>
  );
}

export default App;
