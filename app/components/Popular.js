import React from 'react'

export default class Popular extends React.Component {
    render() {
        const langauges = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <ul className='flex-center'>
                {langauges.map((language) => (
                    <li key={language}>
                        <button className='btn-clear nav-link'>
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}