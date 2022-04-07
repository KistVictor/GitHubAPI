import { connect } from 'react-redux'

import Aside from './Aside'

function Home({ user }) {

	return(
    <main className='bg-gray-900 h-full pt-14'>
    
      <Aside />

    </main>
	)
}

export default connect(state => ({ user: state.user}))(Home)