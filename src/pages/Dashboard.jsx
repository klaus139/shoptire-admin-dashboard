import React from 'react'
import {BsArrowDownRight, BsArrowUpRight} from 'react-icons/bs'
const Dashboard = () => {
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p>Total</p> <h4 className='mb-0'>$1000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6><BsArrowDownRight /> 36%</h6>
            <p className='mb-0'>Compared to April 2023</p>
          </div>

        </div>
        <div className='d-flex justify-content-between align-items-end  flex-grow-1 bg-white p-3 rounded-3'>
        <div>
            <p>Total</p> <h4 className='mb-0'>$1000</h4>
          </div>{"  "}
          <div className='d-flex flex-column align-items-end'>
          <h6 className='red'> <BsArrowDownRight /> 36%</h6>
            <p className='mb-0'>Compared to April 2023</p>
          </div>

        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
           <div>
            <p>Total</p> <h4 className='mb-0'>$1000</h4>
          </div>{"  "}
          <div className='d-flex flex-column align-items-end'>
          <h6 className='green'><BsArrowDownRight /> 36%</h6>
            <p className='mb-0'>Compared to April 2023</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard