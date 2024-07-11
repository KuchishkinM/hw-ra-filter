import { Component } from "react";

export default class ProjectList extends Component {
  render() {
    let { projects } = this.props
    return (
      <div className={'project-list'}>
        {projects.map((project) => <img className={'project'} src={project.img} data-category={project.category} alt="filter-image" />)}
      </div>
    )
  }
}

