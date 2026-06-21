import { useState , useEffect } from 'react'

import Pagination from '../components/pagination'
import SearchFormSection from '../components/SearchFormSection'
import JobsListings from '../components/JobsListings'
import jobsData from '../data.json'


const RESULTS_PER_PEAGE = 5

export function SearchPage() {
  const [filters,setFilters]=useState({
    technology: '',
    location:'',
    experienceLevel: '',
  })
  const[textToFilters,setTextToFilter] = useState('')
  const [currentPage,setCurrentPage] = useState(1)

  const jobsFilteredByFilters = jobsData.filter(job => {
    return (
      (filters.technology === '' || job.data.technology === filters.technology) &&
      (filters.location === '' || job.data.modalidad === filters.location) &&
      (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel)
    )
  })

  const jobsWithTextFilter = textToFilters === ''
  ? jobsFilteredByFilters
  : jobsFilteredByFilters.filter (job => {
    return job.titulo.toLocaleLowerCase().includes(textToFilters.toLowerCase())
  })

  const totalPage = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PEAGE)

  const pageResults = jobsWithTextFilter.slice(
    (currentPage -1) * RESULTS_PER_PEAGE , // PAGIANA 1 -> 0 , PAGINA 2-5
    currentPage * RESULTS_PER_PEAGE // PAGINA 1 -> 5 , PAGIAN 2->10
  )
  const handlePageChange = (page) => {
    console.log('Cambiando la pagina:', page)
    setCurrentPage(page)
  }

  const handleSearch = (filters) =>{
    setFilters(filters)
    setCurrentPage(1)
  }

  const handleTextFilter = (newTextToFilters) => {
    setTextToFilter(newTextToFilters)
    setCurrentPage(1)
  }

  useEffect(() => {
    document.title=`Resultados : ${jobsWithTextFilter.length},Pagina ${currentPage} -DevJobs`
  },[jobsWithTextFilter,currentPage])

  return ( 
    <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}/>  

      <section>
        <JobsListings jobs ={pageResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
      </section>
      
    </main>
  )
}


