import React from 'react'
import './team.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVT1,
    tname: 'Nithis Anand',
    des1: 'Startup Founder And Student',
    des2: 'Sri Krishna College of Engineering and Technology'
  },
  {
    avatar: AVT2,
    tname: 'Sudeep',
    des1: 'Student',
    des2: 'College of Engineering Guindy'
  },
  {
    avatar: AVT3,
    tname: 'Dhusyanth Karthic',
    des1: 'Student',
    des2: 'College of Engineering Guindy'
  },
  {
    avatar: AVT4,
    tname: 'Nithish Rajkumar',
    des1: 'Student',
    des2: 'College of Engineering Guindy'
  },
]





const Team = () => {
  return (
    <section id='team'>
      <h5>Know abot our team</h5>
      <h2 className='ot'>Our Team</h2>

      <Swiper className="container team__container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      

      >

       {
        data.map(({avatar,tname,des1,des2},index) =>{
          return(
        <SwiperSlide key={index} className='team'>
          <div className="team__avatar">
            <img src={avatar} alt='name'/>
          </div>    
            <h5 className='team_name'>{tname}</h5>
            <small className='team_des'>{des1}</small>
            <small className='team_des'>{des2}</small>
        </SwiperSlide>

          )
        })
       }
      </Swiper>

    </section>
  )
}

export default Team