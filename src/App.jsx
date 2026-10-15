import { BrowserRouter, Routes, Route } from 'react-router'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop'
import { MainPage } from './Pages/MainPage'
import { Clothes } from './Pages/Clothes'
import { Accessory } from './Pages/Accessory'
import { ProductInfo } from './Pages/ProductInfo'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import { Search } from './Pages/Search'
import { NotFound } from './Pages/NotFound'
import banner1 from './Components/Assets/Kouman_banner1.webp'

function App() {
  return (
    // import.meta.env.BASE_URL is "/Kouman/" on GitHub Pages and "/" in dev.
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainPage banner={banner1} />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='/accessory' element={<Accessory />} />
          <Route path='/product/:productId' element={<ProductInfo />} />
          <Route path='/search' element={<Search />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
