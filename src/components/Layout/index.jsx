import Header from './Header'

function Layout({ children }) {

	return(
    <>
      <Header />

      <main className='bg-gray-900 h-screen'>{children}</main>

      <footer>
        
      </footer>
    </>
	)
}

export default Layout