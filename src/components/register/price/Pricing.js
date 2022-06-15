import PageDescription from '../PageDescription';
import styles from './Pricing.module.css';
import PricingCard from './PricingCard';


const govtPricingList = [
    {"value":45.00, "period":"mon"},
    {"value":490.00, "period":"yr"}
];

const standardPricingList = [
    {"value":95.00, "period":"mon"},
    {"value":990.00, "period":"yr"}
]

const stepNo = 'STEP 1 OF 3';
const title = 'Choose Your Plan';
const description = 'Take the grunt work and guess work out of media media monitoring and receive Take the grunt work and guess work out of media media monitoring';


const Pricing = () => {
    return <div className={styles['main-content']}>
        <PageDescription stepNo={stepNo} title={title} description={description}>
        </PageDescription>
        <div className={styles['pricing-grid']}>
            
            <PricingCard title="Government" 
            description="Requires govt email address"
            pricingList={govtPricingList}/>
            
            <PricingCard title="Standard" 
            description="For candidate, campaigns, PAC's etc..."
            pricingList={standardPricingList}/>
            
            <PricingCard title="Frims" 
            description="For mail, PR communications etc..."
            others="Contact Us"/>
        </div>
    </div>
}

export default Pricing;