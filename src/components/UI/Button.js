import "./Button.css"

export default function Button(props) {
  return (
    <button type={props.type} className={`button ${props.className}`} onClick={props.onClick} >
      {props.children}
    </button>
  );
}
