function Student(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Major: {props.major}</p>
        </div>
    );
}

export default Student;