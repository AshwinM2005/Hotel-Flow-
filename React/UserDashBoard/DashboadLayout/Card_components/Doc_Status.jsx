import React from 'react'

function Doc_Status() {
  return (
    <div className='doc-status-card'>
        <h3>Verification Status</h3>
        
        <div className="status-box">
          <div className="status-icon">!</div>

          <div className="status-text">
            <h4>Pending</h4>
            <p>Upload documents for faster check-in.</p>
          </div>
        </div>

        <button>upload Id</button>
    </div>
  )
}

export default Doc_Status