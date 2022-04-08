import { connect } from 'react-redux'

function Waiting({ user }) {
    return (
      <main className='flex flex-col items-center justify-center bg-gray-900 h-screen -mb-28'>

        <img className='w-96' src={user.avatar_url} alt="daft punk octocat" />

        <h1 className='text-2xl text-gray-50'>Estamos esperando você fazer uma busca</h1>

      </main>
    )
}

export default connect(state => ({ user: state.user}))(Waiting)