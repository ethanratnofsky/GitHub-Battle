import React from 'react'
import ReactDOM from 'react-dom'

import Popular from './components/Popular'

import './index.css'

// Component
// - State
// - Lifecycle
// - *UI*

class App extends React.Component {
    render() {
        return (
            // JSX vvv
            <div className='container'>
                <Popular />
            </div>
            // JSX ^^^
            // Babel is needed to compile JSX into regular JavaScript invokations for browsers
        )
    }
}

ReactDOM.render(
    <App />, // React Element
    document.getElementById('app') // Where to render the element
)