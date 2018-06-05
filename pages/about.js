import React from 'react'
import {connect} from 'react-redux'
import Link from 'next/link'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        console.log(window['__NEXT_REDUX_STORE__'].getState())
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <nav>
                <Link href='/'><a>Home</a></Link> | 
                <Link href='/about'><a>About</a></Link>
            </nav>
        )
    }
}

export default connect()(About)