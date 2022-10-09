import React, { ComponentType } from "react";
import { ButtonType } from "../components/form/FormController";

type ExtraInfoType = ButtonType;
// Mark the function as a generic using P (or whatever variable you want)
export function WrapWithButtonComponent<P extends ExtraInfoType>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  // const [extraInfo, setExtraInfo] = useState<string>("30210321031023012321312");

  const WrappedComponentWithExtraInfo = (props: P) => {
    //console.log("WrappedComponentWithExtraInfo.props");
    // At this point, the props being passed in are the original props the component expects.
    return (
      <>
        <button onClick={() => console.log(props)}>Verify</button>
        <WrappedComponent {...props} />
      </>
    );
  };
  return WrappedComponentWithExtraInfo as ComponentType<P>;
  // return WrappedComponentWithExtraInfo as ComponentType<
  //   Omit<P, "additionalProps">
  // >;
}

//<P extends ExtraInfoType>(WrappedComponent: ComponentType<P>) : ComponentType<Omit<P, 'additionalProp'>>
