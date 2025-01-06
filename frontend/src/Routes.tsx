import { HomePage } from '@/pages/home/Home.page'

const Routes = [
  // Base path for hosting the kissena website
  {
    path: '/',
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: '*',
    description: ' 404 Not Found',
    element: <div>{'Whoops! 404!'}</div>,
  },
]

export default Routes
