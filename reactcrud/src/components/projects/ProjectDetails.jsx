import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aut possimus tempore iste rem minima provident nam quisquam laudantium nisi eligendi enim deserunt ratione quia! Enim adipisci veniam accusamus animi.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Conrad Maré</div>
                    <div>2021/05/18</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails