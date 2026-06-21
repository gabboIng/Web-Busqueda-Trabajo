
import {JobCard }from './JobCard'
function JobsListings ({jobs}){
    return (   
            <>
           <h2 className="title-search">Resultados de búsqueda </h2>
            <div className="jobs-listings">
                {jobs.map(job => (
                <JobCard key={job.id} job ={job}/>
                ))}
            </div>
        </>
    )
}

export default JobsListings