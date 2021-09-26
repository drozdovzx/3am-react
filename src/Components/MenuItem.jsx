import React from 'react'

function MenuItem ({ items }) {
    return (
        <nav className="nav" id="nav-main">
            {
                items.map((name, index) =>
                    <button onClick={() => alert(1)} key={`${name}_${index}`} className={"nav-link"}>
                        {name}
                    </button>)
            }
        </nav>
    )
}
export default MenuItem;