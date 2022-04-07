import { connect } from 'react-redux'

import Aside from './Aside'
import Content from './Content'

function Home({ user }) {

	return(
    <main className='bg-gray-900 h-full pt-24'>

      <div className='flex flex-row justify-center h-7 gap-5 w-full border-b border-gray-600 border-solid text-gray-50'>
        <button className='hidden md:flex hover:scale-110 transition'>Repositories</button>
        <button className='hidden md:flex hover:scale-110 transition'>Stars</button>
      </div>

      <div className='flex flex-col md:flex-row gap-5 mx-auto max-w-xs md:max-w-screen-md lg:max-w-screen-lg'>

        <Aside />
        
        <Content />

      </div>

    </main>
	)
}

export default connect(state => ({ user: state.user}))(Home)