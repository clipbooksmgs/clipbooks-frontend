import styles from './Button.module.css';

const Button = (props) =>  {
   const buttonHandler = () => {
      if(props.type==='button') {
         props.buttonHandler();
      }
   }
   return <button className={styles.button} onClick={buttonHandler} type={props.type}>{props.label}</button>
}

export default Button