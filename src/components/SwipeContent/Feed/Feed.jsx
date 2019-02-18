import React, { Component } from 'react'
import './Feed.css'

const Follow = (props) => {
  const { name, position, picture } = props
  return (
    <div>
      <div className='follow-content'>
        <img src={picture} alt={name} />
        <div className='follow-content-body'>
          <p>{name}</p>
          <span>
            {position}
          </span>
        </div>
        <button> follow </button>
        <span className='follow-close'>
          <i className='fas fa-times' />
        </span>
      </div>
    </div>
  )
}
const Experts = (props) => {
  const {experts, newExperts} = props
return(
<div>
 <div className='experts-content'>
    <p>{experts} <span>Experts</span> </p>
    <span className='question-span'> 
        <i class="fas fa-circle"></i> {newExperts} New
    </span>
  </div>
</div>
)
}
export default class Feed extends Component {
  static defaultProps = {
    follow:[
      {
        name: 'yomi adedeji',
        position: 'managing direction @softcon',
        picture:'assets/img/avatar7.jpg'
      },
      {
        name: 'don jazzy',
        position: 'artiste CEO @mavin records',
        picture:'assets/img/avatar2.jpg'
      },
      {
        name: 'wizkid davido',
        position: 'artiste, CEO @wahalla studio',
        picture:'assets/img/avatar4.jpg'
      }
    ],
    experts:[
      {
        experts: '1,207',
        newExperts:11
      }
    ]
  }
  render () {
    const follow = this.props.follow.map((user, index)=>(
      <Follow key={index} {...user}/>
    ))
    const expert = this.props.experts.map((expert, index)=>(
      <Experts key={index} {...expert}/>
    ))
    return (
      <div id='feed'>
     
        <div className='follow'>
          <div className='header'>
            <p>WHO TO FOLLOW</p>
            <i className='fa fa-sync'> refresh</i>
          </div>
          
          {follow}
      
          
          {expert}
          <div className='info'>
            <ul>
              <li>Legal</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
