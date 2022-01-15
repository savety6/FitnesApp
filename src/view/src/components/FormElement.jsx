export default function FormElement (props) {
    return (
        <div className="text_field">
            <label>{props.label}</label>
            <br/>
            <input type={props.type} name={props.name} required/>
        </div>
    )
}
