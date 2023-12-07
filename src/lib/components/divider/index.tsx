import { useDivider, UseDividerProps } from "./use-divider";

const Divider = (props: UseDividerProps) => {
  const { getDividerProps } = useDivider(props);

  return <hr {...getDividerProps()} />;
};

export default Divider;
