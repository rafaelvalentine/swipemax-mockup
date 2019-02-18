import React, { Component } from 'react'
import { OverlayTrigger, Popover, ButtonToolbar, Button } from 'react-bootstrap'

const Notification = (props) => {
  const { name, picture, date, text } = props
  return (
    <div>
      <div className='notification-messages-content'>
        <img src={picture} alt={name} />
        <div className='notification-messages-content-body'>
          <p><strong>{name}</strong> <small>shared </small>{text} </p>
          <span className='notification-messages-time'>
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}
export default class EmailDropdown extends Component {
  static defaultProps = {
    session:[
      {
        name: 'facebook',
        picture:'assets/img/facebook.svg',
        date:'1 min ago',
        text:'Lorem ipsum dolor sit amet.'
      },
      {
        name: 'don jazzy',
        position: 'artiste CEO @mavin records',
        picture:'assets/img/twitter.svg',
        date:'2 min ago',
        text:'Lorem ipsum dolor sit amet.'
      },
      {
        name: 'selena gomez',
        position: 'Co-founder @two-cents',
        picture:'assets/img/linkedin.svg',
        date:'3 min ago',
        text:'Lorem ipsum dolor sit amet.'
        
      }
    ]
  }
  render () {
    const notify = this.props.session.map((notify, index)=>(
      <Notification key={index} {...notify}/>
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
                  title='View Notifications'
                >
                 {notify}
                </Popover>
                
              }
            >
              <img style={{ margin: '10px', width: '30px', height: '30px' }} src='assets/img/notification.svg' alt='' />
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
      </div>
    )
  }
}
