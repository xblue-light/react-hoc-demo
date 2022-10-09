import React, { useState, useEffect } from "react";

// First we need to add a type to let us extend the incoming component.
type ExtraInfoType = {
  buttonProps?: {
    label?: string;
    action?: {
      type?: string;
      requestParams?: any[];
      url?: string;
    };
  };
  age?: number;
  firstName?: string;
  extraProps?: any;
};
// Mark the function as a generic using P (or whatever variable you want)
export function useWithExtraInfo<P>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  WrappedComponent: React.ComponentType<P & ExtraInfoType>
) {
  const [extraInfo, setExtraInfo] = useState<string>("30210321031023012321312");

  const ComponentWithExtraInfo = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    return <WrappedComponent {...props} extraProps={extraInfo} />;
  };
  return ComponentWithExtraInfo;
}
