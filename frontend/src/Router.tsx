import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './Routes'

const bobbaRouter = createBrowserRouter(Routes)

function Router() {
  return <RouterProvider router={bobbaRouter} />
}

export default Router
