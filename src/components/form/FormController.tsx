import { FormInputTypeFactory } from "./inputs/FormInputTypeFactory";
import { WrapWithButtonComponent } from "../../hoc/WrapWithButtonComponent";

export type ButtonType = {
  field: { type: "input" | "dropdown"; value?: string };
  buttonProps?: {
    type?: string;
    action?: {
      params?: any[];
      requestURL?: string;
      httpMethod?: "GET" | "POST" | "PUT" | "DELETE";
      payload?: any;
    };
  };
};

export default function FormController(props: ButtonType) {
  const FormComponentElement = !!props?.buttonProps
    ? WrapWithButtonComponent<ButtonType>(
        FormInputTypeFactory[props?.field?.type]
      )
    : FormInputTypeFactory[props?.field?.type];

  return <FormComponentElement {...props} />;
}
