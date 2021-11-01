import React from 'react'
import { FormattedMessage } from 'react-intl'
import { HashLink  } from 'react-router-hash-link';



function MenuItem ({ items, items1, items2 }) {
    return (
        <nav className="nav" id="nav-main">
            {
                items.map((name, index) =>
                    <HashLink smooth to={items1[index]+'#'+items2[index]} key={`${name}_${index}`} >
                        <button className={"nav-link"}>
                            <FormattedMessage id={name}/>
                        </button>
                    </HashLink >
                )
            }
        </nav>
    )
}
export default MenuItem;
