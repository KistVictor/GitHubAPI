import { connect } from 'react-redux'

function Aside({ user }) {

	return(
    <aside className="flex flex-row justify-center lg:justify-between gap-5 pt-10 md:px-20 w-full h-full mx-auto max-w-xs md:max-w-screen-md lg:max-w-screen-lg">

      <div className="flex flex-col items-start w-64">

        <img
          className='w-64 h-64 mb-5 rounded-full border border-gray-600 border-solid'
          src={user.avatar_url}
          alt=""
        />

        <h1 className='flex flex-col items-start mb-2'>
          <span className='text-2xl text-gray-50'>{user.name}</span>
          <span className='text-lg text-gray-500'>{user.login}</span>
        </h1>

        <p className='mb-5 text-left leading-tight text-gray-200 font-light'>{user.bio}</p>

        {!!user.followers && 
          <div className='flex flex-row gap-2 mb-5 text-left leading-tight text-gray-100 font-light text-sm'>
            <p>{user.followers} <span className='text-gray-500 text-xs'>followers</span></p>
            <p>{user.following} <span className='text-gray-500 text-xs'>following</span></p>
          </div>
        }

        <div className='flex flex-col items-start text-left text-gray-100 font-light text-sm'>
          <p>{user.company}</p>
          <p>{user.location}</p>
          <p>{user.email}</p>
          <a className='hover:text-gray-500 transition' href={user.blog}>{user.blog}</a>
        </div>

      </div>

    </aside>
	)
}

export default connect(state => ({ user: state.user}))(Aside)