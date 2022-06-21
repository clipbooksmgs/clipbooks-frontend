import {useNavigate} from 'react-router-dom';
import styles from './PricingCard.module.css';

const PricingCard = (props) => {


    const navitage = useNavigate();

    const priceButtonHandler= (stripeProdId) =>{
        navitage('/signup/'+stripeProdId);
    }

    const list = props.products!== undefined ? props.products
    .filter(prod => prod.category=== props.category)
    .map(prod =>  
    <div key={prod.peroid} onClick={() => priceButtonHandler(prod.stripeProdId)}  
    className={styles['pricing-amount']}>
        <span className={styles.value}>&#36;{prod.price.toFixed(2)}</span>/
        <span className={styles.period}>{prod.period}</span>
    </div>
    ): <div className={styles['pricing-amount']}>{props.others}</div>;

    

    
    return <div key={props.title} className={styles['pricing-card']}>
        <div className={styles.heading}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
        <div className={styles['pricing-list']}>
           {list}
        </div>
    </div>
}

export default PricingCard;