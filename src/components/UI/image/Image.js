const Image = ({children, ...props}) => {
  return (
  <div {...props}>
      {children}
      </div>
  );
};

export default Image;
