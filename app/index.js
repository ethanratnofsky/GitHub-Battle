import React from 'react'
import ReactDOM from 'react-dom'

import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'

import './index.css'

// Component
// - State
// - Lifecycle
// - *UI*

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        }
    }
    render() {
        return (
            // JSX vvv
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                    <div className='container'>
                        <Nav />
                        <Popular />
                    </div>
                </div>
            </ThemeProvider>
            // JSX ^^^
            // Babel is needed to compile JSX into regular JavaScript invokations for browsers
        )
    }
}

ReactDOM.render(
    <App />, // React Element
    document.getElementById('app') // Where to render the element
)