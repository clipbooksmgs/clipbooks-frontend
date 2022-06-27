import styles from './AddButton.module.css';

const AddButton = (props) => {

    const buttonHandler  = () => {
        props.buttonHandler({})
    }

    return (
        <button onClick={buttonHandler} type="button" className={styles.button}>{props.label}</button>
    )
}

export default AddButton;