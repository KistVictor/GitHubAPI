import { connect } from 'react-redux'

import Aside from './Aside'
import Content from './Content'
import Waiting from '../Waiting'

function Home({ user }) {

  if (user.waiting) {
    return (
      <Waiting />
    )
  }

	return(
    <main className='bg-gray-900 h-full pt-24'>

      <div className='h-7 w-full border-b border-gray-600 border-solid' />

      <div className='flex flex-col md:flex-row items-center md:items-start gap-5 mx-auto max-w-xs md:max-w-screen-md lg:max-w-screen-lg'>

        <Aside />
        
        <Content />

      </div>

    </main>
	)
}

export default connect(state => ({ user: state.user}))(Home)