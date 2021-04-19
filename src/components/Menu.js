import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '../styles/menu.css';
import { MdMenu } from 'react-icons/md';

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


const SiteMenu = () => {
    return (
        <StaticQuery 
            query={MENU_QUERY}
            render={(data) => {
                if(data.allWpMenuItem) {
                    const menuItems = data.allWpMenuItem.nodes
                    // console.log(data)

                    return (
                        <Menu menuButton={
                            ({ open }) => 
                            
                            <MenuButton>{open ? "X" : <MdMenu />}</MenuButton>}>
                            {
                                menuItems &&
                                menuItems.map((menuItem) => (
                                    <MenuItem 
                                        key={menuItem.id} 
                                        href={menuItem.url}
                                    >{menuItem.label}</MenuItem>
                                ))
                            }
                        </Menu>
                    )
                }
                return null
            }}
        />
    )
}

export default SiteMenu