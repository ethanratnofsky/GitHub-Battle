import React from 'react'

function LanguagesNav({ selected, onUpdateLanguage }) {
    const langauges = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <ul className='flex-center'>
                {langauges.map((language) => (
                    <li key={language}>
                        <button 
                            className='btn-clear nav-link'
                            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
                            onClick={() => onUpdateLanguage(language)}>
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }
    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }
    render() {
        const { selectedLanguage } = this.state

        return (
            <>
                <LanguagesNav 
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </>
        )
    }
}