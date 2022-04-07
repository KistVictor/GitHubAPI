import { connect } from 'react-redux'

function Content({ repos, stars }) {

	return(
    <div className='flex flex-col'>
      {repos.map((item) => <p>{item.name}</p>)}
    </div>
	)
}

export default connect(state => ({ repos: state.repos, stars: state.stars}))(Content)