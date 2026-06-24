import Header from './components/Header'
import Footer from './components/footer'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { NotFoundPage } from './pages/404'
import { useRouter } from './hooks/useRouter'
import { Route } from './components/Route'


function App() {
    
 
  return (
    <div>
      <Header/>
      <Route path="/" component={HomePage} />
      <Route path ="/search" component={SearchPage}/>
     <Footer/>
    </div>
  )
}

export default App
