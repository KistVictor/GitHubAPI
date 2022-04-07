import { connect } from 'react-redux'

function Home({ user }) {

  console.log(user)

	return(
    <section className="flex flex-row items-center justify-center gap-5 w-full h-full mx-auto max-w-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">

      <div>

        <h1 className='text-4xl text-gray-200'>User details</h1>

        <p>{user.login}</p>

      </div>

    </section>
	)
}

export default connect(state => ({ user: state.user}))(Home)