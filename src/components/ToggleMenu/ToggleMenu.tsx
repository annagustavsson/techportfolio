import React from 'react'

interface Props {
    text : string,
    //color: string
    //active: bool,
}

const ToggleMenu = ({text}: Props) => {
    return (
        <div>
            <button>{text}</button>
        </div>
    )
}

export default ToggleMenu
