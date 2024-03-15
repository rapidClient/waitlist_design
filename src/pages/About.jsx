// import { useState } from 'react'
import CompanyDescription from '../components/CompanyDescription'
import Layout from '../layouts/Layout'
// import OurTeam from '../components/OurTeam'

function AboutUs() {
  return (
    <Layout>
      <main className='bg-[#F2F6FF] pt-16'>
        <section className='px-6 md:px-10 lg:px-24 pt-0 pb-8 md:py-12 lg:py-20'>
        <CompanyDescription />
        {/* <OurTeam /> */}
        </section>
      </main>
    </Layout>
  )
}

export default AboutUs
