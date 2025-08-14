import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import  './App.css'
import ProductList from './components/productList'
import AdminPage from './components/adminPage'
import Header from './components/header'
import CreatePage from './components/createPage'
import UpdatePage from './components/updatePage'
function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/admin/add' element={<CreatePage/>}/>
      <Route path='/admin/update/:id' element={<UpdatePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
