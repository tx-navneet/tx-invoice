import React from 'react'

const PipelineStats = () => {
  return (
    <div>
          <div className="d-md-flex flex-shrink-0 mx-3 d-none">
      {[
        { label: 'Pipeline Value:', value: '$23,706' },
        { label: 'Total Value:', value: '$100,000' },
      ].map((stat, index) => (
        <div key={index} className="d-flex align-items-center">
          <span className="d-md-inline d-none">{stat.label}</span>
          <span className="text-dark fs-5 fw-medium ps-2">{stat.value}</span>
          {index === 0 && <div className="v-separator"></div>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default PipelineStats
