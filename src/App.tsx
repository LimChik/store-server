
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/pages/Layout/Layout'
import Home from './components/pages/Home/Home'
import Product from './components/pages/Product/Product'
import NotFound from './components/pages/NotFound/NotFound'
import SinglePage from './components/pages/SinglePage/SinglePage'
import { items } from './type/Item'
import BasketCheckout from './components/pages/BasketCheckout/BasketCheckout'





const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='product' element={<Product />} />
    <Route path='product/:id' element={<SinglePage item={items} />} />
    <Route path='*' element={<NotFound />} />
    <Route path='checkout' element={<BasketCheckout />} />

  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App