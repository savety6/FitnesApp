export default function form(props) {
    return (
        <form method="post">   
            {props.children}
        </form>
    )
}
