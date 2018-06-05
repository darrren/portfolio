import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import Link from 'next/link'

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <nav>
        <Link href='/'><a>Home</a></Link> | 
        <Link href='/about'><a>About</a></Link>
      </nav>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
