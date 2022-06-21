import styles from './Table.module.css';



const Table = (props) => {

    const data = props.dataObject;
    let keyValuePairs;
    if(data){
        keyValuePairs = Object.entries(data);
    }

    console.log(keyValuePairs);

    const table = !keyValuePairs ? 'dataObject is not provided' : (
        <table className={styles['table']}>
            <tbody>
                {
                    keyValuePairs.map(keyValue => 
                    <tr key={keyValue}>
                        <td className={styles.label}>{keyValue[0].toUpperCase()}</td><td>{keyValue[1]}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        )
   
    return table;
}

export default Table;