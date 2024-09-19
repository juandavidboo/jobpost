
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import JobListBtn from '../components/JobListBtn'


const HomePage = () => {
  return (
    <>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings isHome={true} />
      <JobListBtn value="View All Jobs" />
      </>
  )
}

export default HomePage