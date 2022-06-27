import { useSelector } from 'react-redux';
import PageDescription from '../PageDescription';
import styles from './Pricing.module.css';
import PricingCard from './PricingCard';




const stepNo = 'STEP 1 OF 3';
const title = 'Choose Your Plan';
const description = 'Take the grunt work and guess work out of media media monitoring and receive Take the grunt work and guess work out of media media monitoring';


const Pricing = () => {

    const products = useSelector(state => state.product.products);

    console.log(products);

    
    return <div className={styles['main-content']}>
        <PageDescription stepNo={stepNo} title={title} description={description}>
        </PageDescription>
        {!products && <h5>Products are loading....</h5>}
        {products && <div className={styles['pricing-grid']}>
            
            <PricingCard title="Government" 
            description="Requires govt email address"
            products={products} category='govt'/>
            
            <PricingCard title="Standard" 
            description="For candidate, campaigns, PAC's etc..."
            products={products} category='stand'/>
            
            <PricingCard title="Frims" 
            description="For mail, PR communications etc..."
            others="Contact Us"/>
        </div>
    }
    </div>
}

export default Pricing;