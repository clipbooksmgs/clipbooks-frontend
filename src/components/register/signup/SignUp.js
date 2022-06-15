import Button from '../../../ui/Button';
import PageDescription from '../PageDescription';
import styles from './SignUp.module.css';

const SignUp = () => {


    const stepNo = 'STEP 2 OF 3';
    const title = 'Create Your Account';
    const description = 'Use your email and password to receive clips';


    return (
    <div className={styles['main-content']}>
        <PageDescription stepNo={stepNo} title={title} description={description}>
        </PageDescription>
        <form className={styles.form}>
            <div className={styles.name}>
                <input className={styles['input-field']} type="text" name="firstname"
                placeholder='Firstname' />
                <input className={styles['input-field']} type="text" name="lastname"
                placeholder='Lastname' />
            </div>

            <input className={styles['input-field']} type="text" name="organization"
            placeholder='Principal Organization' />

            <input className={styles['input-field']} type="email" name="email"
            placeholder='Email' />

            <input className={styles['input-field']} type="password" name="password"
            placeholder='Password' />

            <div className={styles.button}>
                <Button type="submit" label="CREATE ACCOUNT"></Button>
            </div>
        </form>
    </div>
    )
}

export default SignUp;