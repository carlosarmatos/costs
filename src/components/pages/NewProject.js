import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {

        // Initialize cost and services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
          .then((data) => {
            console.log(data)

            // Redirect
            navigate('/projects', { message: 'Success!' })
          })
          .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project and add services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create" />
        </div>
    )
}

export default NewProject