import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects:[]
        }
    }

	/**
	 * Lifecycle method.
	 * Will trigger every time the component is re-rendered.
	 */

	componentWillMount(){
		this.setState({
			projects: [
				{
					id: uuid.v4(),
					title: 'Business Website',
					category: 'Web Design'
				},
				{
					id: uuid.v4(),
					title: 'Social App',
					category: 'Mobile Development'
				},
				{
					id: uuid.v4(),
					title: 'E-commerce Shopping Card',
					category: 'Web Development'
				}
			]
		});
    }

    handleAddProject(project){
	    // State is immutable.
	    // Do not change it.
	    // Update it.
	    let projects = this.state.projects;
	    projects.push(project);
	    this.setState({
	    	projects: projects
	    })
    }

  render() {
    return (
      <div className="App">
	      <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;