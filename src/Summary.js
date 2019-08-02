import React, { Component } from 'react'

export class Summary extends Component {
    render() {
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {this.props.summary}
                
              </section>
        )
    }
}

export default Summary
