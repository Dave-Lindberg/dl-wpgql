import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MenuItem from "./MenuItem"

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`

    fragment MenuItem on WpMenuItem {
        id
        label
        url
        title
        target
    }

    query GETMAINMENU {
        allWpMenuItem(filter: {locations: {eq: PRIMARY}}) {
            nodes {
                ...MenuItem
            }
        }
    }
`


const Menu = () => {
    return (
        <StaticQuery 
            query={MENU_QUERY}
            render={(data) => {
                if(data.allWpMenuItem) {
                    const menuItems = data.allWpMenuItem.nodes
                    const wordPressUrl = data.allWpMenuItem.nodes.url

                    return (
                        <div style={{ marginBottom: "20px"}}>
                            {
                                menuItems &&
                                menuItems.map((menuItem) => (
                                    <MenuItem 
                                        key={menuItem.id} 
                                        menuItem={menuItem} 
                                        wordPressUrl={wordPressUrl}
                                    />
                                ))
                            }
                        </div>
                    )
                }
                return null
            }}
        />
    )
}

export default Menu