import React from 'react'

function ProjectDetail(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo quas officia nihil voluptatum doloribus in eius voluptate perspiciatis dicta enim commodi mollitia est consequuntur quos porro, excepturi reiciendis sunt.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Hung</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
