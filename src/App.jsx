import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { NotFoundPage } from './pages/404'
import { useEffect } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  let page = <NotFoundPage/>
  if (currentPath === '/'){
    page = <HomePage/>
  }else if (currentPath === '/search'){
    page= <SearchPage/>
  }

  useEffect(() => {
    const handleLocationChange = ()=>{
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate',handleLocationChange)
    return () => {
      window.removeEventListener('popstate',handleLocationChange)
    }
  }, [])
  return (
    <div>
      <Header/>
      {page}
     <Footer/>
    </div>
  )
}

export default App
