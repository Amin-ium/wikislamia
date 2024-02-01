import React, { useEffect } from 'react'

const Results = ({results}) => {
    useEffect(() => {
        console.log(results);
    }, [results])


  return (
    <div>Results</div>
  )
}

export default Results
