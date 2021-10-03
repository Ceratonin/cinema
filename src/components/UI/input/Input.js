import classes from "./InputStyle.css"

const Input = (props) => {
    return(
        <input type="text" {...props} className="input"/> 
    )
}

export default Input