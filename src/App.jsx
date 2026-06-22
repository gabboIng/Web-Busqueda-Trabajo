import Header from './components/Header'
import Footer from './components/footer'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { NotFoundPage } from './pages/404'
import { useRouter } from './hooks/useRouter'



function App() {
  const {currentPath} = useRouter()
  let page = <NotFoundPage/>
  if (currentPath === '/'){
    page = <HomePage/>
  }else if (currentPath === '/search'){
    page= <SearchPage/>
  }

 
  return (
    <div>
      <Header/>
      {page}
     <Footer/>
    </div>
  )
}

export default App
