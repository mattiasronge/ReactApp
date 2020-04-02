import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dasboard extends Component {
render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications></Notifications>
                </div>
            </div>
        )
    }
}

export default Dasboard