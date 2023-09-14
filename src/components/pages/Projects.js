import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from './Projects.module.css';
import Container  from '../layout/Container';
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
            },
        }).then(resp => resp.json())
          .then(data => {
            console.log(data);
            setProjects(data)
          })
          .catch(err => console.log(err))
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then(resp => resp.json())
      .then(data => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Project removed!');
      })
      .catch(err => console.log(err));

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
            {projectMessage && <Message type="success" msg={projectMessage} />}

            <Container customClass="start">
                {projects.length > 0 && 
                projects.map((project) => (
                    <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                         />
                ))}
            </Container>
        </div>
    )
}

export default Projects