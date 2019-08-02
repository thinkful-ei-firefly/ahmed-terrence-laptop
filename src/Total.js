import React, { Component } from 'react'

export class Total extends Component {
    render() {
        return (
            <section className="main__summary">
                
                <div className="summary__total">
                  <div className="summary__total__label">Your Price: </div>
                  <div className="summary__total__value">
                  { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.total) }
                  </div>
                </div>
              </section>
        )
    }
}

export default Total