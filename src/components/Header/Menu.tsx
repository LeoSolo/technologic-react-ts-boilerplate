import * as React from 'react'
import { Link } from 'react-router-dom'

import { LINKS } from '../../constants/links'

export class Menu extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <ul className="menu-list">
                <li className="btn active">
                    <Link to={LINKS.MAIN}>Главная</Link>
                </li>
                <li className="btn">
                    <Link to={LINKS.NEWS}>Новости</Link>
                </li>
                <li className="btn">
                    <Link to={LINKS.GALLERY}>Галерея</Link>
                </li>
                <li className="btn">
                    <Link to={LINKS.CONTACTS}>Контакты</Link>
                </li>
            </ul>
        )
    }
}

