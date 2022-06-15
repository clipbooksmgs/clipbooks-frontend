import styles from './PricingCard.module.css'

const PricingCard = (props) => {

    const list = props.pricingList!== undefined ? props.pricingList.map(price =>  
    <div key={price.peroid} className={styles['pricing-amount']}>
        <span className={styles.value}>&#36;{price.value.toFixed(2)}</span>/
        <span className={styles.period}>{price.period}</span>
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