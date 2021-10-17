import "./ImageStyle.css";

const Image = ({ src, ...props }: any) => {
  if (src !== "") {
    return (
      <div {...props}>
        <img className="imgStyle" src={src} alt="." />
      </div>
    );
  }
  return <div {...props} />;
};

export default Image;
