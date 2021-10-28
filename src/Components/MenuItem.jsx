import React from 'react'
import { FormattedMessage } from 'react-intl'

function MenuItem ({ items, items1, items2 }) {

    return (
        <nav className="nav" id="nav-main">
            {
                items.map((name, index) =>
                    <a href={items1[index] + '#' + items2[index]} key={`${name}_${index}`} >
                        <button className={"nav-link"}>
                            <FormattedMessage id={name}/>
                        </button>
                    </a>
                )
            }
        </nav>
    )
}
export default MenuItem;
