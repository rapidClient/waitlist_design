import '../App.css'
import Form from '../components/Form'
import HeroSetion from '../components/HeroSection/HeroSetion'
import Layout from "../layouts/Layout"

function Home() {
  return (
    <Layout>
      <main className='home-container bg-[#F2F6FF]'>
        <section className='px-6 md:px-10 lg:px-24 pb-20'>
            <HeroSetion />
          <Form />
        </section>
      </main>
    </Layout>
  )
}

export default Home
