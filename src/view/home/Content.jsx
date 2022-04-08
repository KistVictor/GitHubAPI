import { useState } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'

function Content({ repos, stars }) {
  const [option, setOption] = useState('repos')

  function content() {
    switch (option) {
      case 'stars':
        return stars
      default:
        return repos
    }
  }

	return(
    <div className='flex flex-col items-center justify-between w-full md:w-7/12 lg:w-9/12 h-full mt-10 md:-mt-6'>

      <div className='flex flex-row items-center gap-5 mb-10 text-gray-50'>
        <button
          onClick={() => setOption('repos')}
          className='hover:scale-110 transition'
          >Repositories</button>
        <button
          onClick={() => setOption('stars')}
          className='hover:scale-110 transition'
          >Stars</button>
      </div>

      <ul className='flex flex-col w-full'>
        {content().map((item, i) => <Card key={i} title={item.full_name} description={item.description} topics={item.topics} url={item.html_url} language={item.language} stars={item.stargazers_count} />)}
      </ul>

    </div>
	)
}

export default connect(state => ({ repos: state.repos, stars: state.stars}))(Content)