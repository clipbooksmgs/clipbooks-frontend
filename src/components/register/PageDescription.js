import styles from './PageDescription.module.css';


const PageDescription = (props) => {
    return(
        <div className={styles.description}>
            <p>{props.stepNo}</p>

            <h3>{props.title}</h3>

            <p>{props.description}</p>
        </div>
    )
}

export default PageDescription