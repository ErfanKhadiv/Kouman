import { BrowserRouter, Routes, Route } from 'react-router'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import {MainPage} from './Pages/MainPage'
import {Accessory} from './Pages/Accessory'
import banner1 from './Components/Assets/Kouman_banner1.webp'
import {ProductInfo} from './Pages/ProductInfo'
import {LoginSignup} from './Pages/LoginSignup'
import {Cart} from './Pages/Cart'
import { Clothes } from './Pages/Clothes'

function App() {

  return (  
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage banner={banner1}/>}></Route>
          <Route path='/Clothes' element={<Clothes/>}></Route>
          <Route path='/Accessory' element={<Accessory/>}></Route>
          <Route path='/product' element={<ProductInfo />}>
            <Route path=':productId' element={<ProductInfo />}></Route>
          </Route>
          <Route path='/loginsignup' element={<LoginSignup/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
