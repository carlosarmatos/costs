import { Link, Router, Routes } from 'react-router-dom';
import styles from './LinkButton.module.css';
import { Route } from 'react-router-dom';

function LinkButton({to, text}) {

    return (

        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton