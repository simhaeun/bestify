import { Inter } from 'next/font/google'
import Layout from '../layouts/Layout'
import Review from '@/layouts/main/Review'
import Main from '@/layouts/main/Main'
import Dashboard from '@/layouts/main/Dashboard'
import Marketing from '@/layouts/main/Marketing'
import Contact from '@/layouts/main/Contact'
import Blog from '@/layouts/main/Blog'
import Faq from '@/layouts/main/Faq'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <Layout>
      <Main/>
      <Dashboard/>
      <Marketing />
      <Review/>
      <Contact/>
      {/* <Blog/> */}
      {/* <Faq/> */}
    </Layout>
  )
}
export default Home;