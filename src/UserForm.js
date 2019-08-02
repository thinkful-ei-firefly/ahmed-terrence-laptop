import React, { Component } from 'react'


export default class UserForm extends Component {
    render() {
        return (
            <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { this.props.features }
          </section>
        )
    }
}
