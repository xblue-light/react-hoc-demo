import TextInputField from "../../TextInputField";

export const FormSelectInput = () => (
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="bmw">BMW</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
);

export type FormInputType = "input" | "dropdown";

export const FormInputTypeFactory: Record<FormInputType, any> = {
  input: TextInputField,
  dropdown: FormSelectInput,
};
