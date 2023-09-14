import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from './Projects.module.css';
import Container  from '../layout/Container';
import LinkButton from "../layout/LinkButton";

function Projects() {

    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state.message;
    }

    return (

        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My projects</h1>
            </div>
            <div className={styles.new_project_button}>
                <LinkButton to='/newproject' text='New Project' />
            </div>
            {message && <Message type="success" msg={message} />}

            <Container customClass="start">
                <p>Projects</p>
            </Container>
        </div>
    )
}

export default Projects