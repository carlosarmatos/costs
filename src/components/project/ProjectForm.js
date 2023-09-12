function ProjectForm() {

    return (
        <form>
            <div>
                <input type="text" placeholder="Enter project name"></input>
            </div>

            <div>
                <input type="number" placeholder="Enter total budget"></input>
            </div>

            <div>
                <select name="category_id">
                    <option disabled selected>Select the category</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Create"></input>
            </div>
            
        </form>
    )
}

export default ProjectForm