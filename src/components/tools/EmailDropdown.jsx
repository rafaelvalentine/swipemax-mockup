import React, { Component } from 'react'
import { OverlayTrigger, Popover, ButtonToolbar, Button } from 'react-bootstrap'

const User = (props) => {
  const {name, position, picture, date, text} = props
return(
<div>
 <div className='navbar-messages-content'>
   <img src={picture} alt={name}/>
   <div className='navbar-messages-content-body'>
     <p>{name}</p>
     <span>
       {position}
     </span>
     <span className='navbar-messages-content-body-text'>
       {text}
     </span>
   </div>
   <span className='navbar-messages-time'> 
   {date}
   </span>
 </div>
</div>
)
}
export default class EmailDropdown extends Component {
  static defaultProps = {
    session:[
      {
        name: 'yomi adedeji',
        position: 'managing direction @softcon',
        picture:'assets/img/avatar7.jpg',
        date:'2h',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        name: 'don jazzy',
        position: 'artiste CEO @mavin records',
        picture:'assets/img/avatar2.jpg',
        date:'3h',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        name: 'selena gomez',
        position: 'Co-founder @two-cents',
        picture:'assets/img/avatar8.jpg',
        date:'4h',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        
      }
    ]
  }
  render () {
    const user = this.props.session.map((user, index)=>(
      <User key={index} {...user}/>
    )) 
    
    return (
      <div>
        <ButtonToolbar>
          {['bottom'].map(placement => (
            <OverlayTrigger
              trigger='click'
              key={placement}
              placement={placement}
              overlay={
                <Popover
                  id={`popover-positioned-${placement}`}
                  title='messages'
                >
                {user}
                </Popover>
              }
            >
             
              <img style={{ margin: ' 10px', width: '30px', height: '30px' }} src='assets/img/envelope.svg' alt='' />
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
      </div>
    )
  }
}
