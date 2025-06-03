import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import { BrowserRouter } from 'react-router-dom'
import { Route,Router,Routes } from 'react-router-dom'
import Recipe from './Pages/Recipe'
import Review from './Pages/Review'
import FAQ from './Pages/FAQ'
import SignUp from './Pages/SignUp'
import Chef from './Pages/Chef'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/chef' element={<Chef/>}/>
      </Routes>
    </BrowserRouter>
  )
}

