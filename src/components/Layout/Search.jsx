import { useState } from 'react'
import { connect } from 'react-redux'

import getUser from '../../services/getUser'

function Search({ user, dispatch }) {
  const [searcehdUser, setSearcehdUser] = useState('')

  function changeUser(user) {
    return{
      type: 'CHANGE_USER',
      user
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await getUser(searcehdUser)
      .then((res) => {
        dispatch(changeUser(res))
      })
    setSearcehdUser('')
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={searcehdUser}
          className='pl-2 text-sm md:w-64 h-6 bg-gray-900 rounded border border-gray-600 border-solid text-gray-50'
          type='text'
          onChange={e => setSearcehdUser(e.target.value)}
          placeholder='Search or jump to...'
        />
      </form>
    </div>
  )
}

export default connect(state => ({ user: state.user}))(Search)