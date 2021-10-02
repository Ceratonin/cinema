import classes from "./ButtonStyle.css";

const Btn = ({children, ...props}) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Btn;
