import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {

    return (
        <section className={styles.home_container}>
            <h1>
                Welcome to <span>Budgets!</span>
            </h1>
            <p>Take control of project finances</p>
            <LinkButton to='/newproject' text='Create project' />
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home