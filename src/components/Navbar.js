import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav  className="container navbar bg-success">
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </nav>
        )
    }
}

export default Navbar
