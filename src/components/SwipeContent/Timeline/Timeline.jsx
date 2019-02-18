import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './Timeline.css'


const Message = (props) => {
  const { picture, name, likes, text, date } = props
  return (
    <div id='message'>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className='message-info'>
              <img src={picture} alt={name} />
              <div className='message-info-content'>
                <p>{name} </p>
                <span>
                  {date}
                </span>
              </div>
            </div>
          </Card.Title>
          {/* <Card.Subtitle className='mb-2 text-muted '>Hello guys,</Card.Subtitle> */}
          <Card.Text>
          {text}
          </Card.Text>
          <div className='response'>
            <ul>
              <li><i class="fas fa-thumbs-up"></i> {likes}</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
const Posts = (props) => {
  const { picture, name, position, views, comments, likes, text, date } = props
  return (
    <div id='post'>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className='post-info'>
              <img src={picture} alt={name} />
              <div className='post-info-content'>
                <p>{name} <i class="fab fa-ello"></i> <small>{date}</small> </p>
                <span>
                  {position}
                </span>
              </div>
            </div>
          </Card.Title>
          {/* <Card.Subtitle className='mb-2 text-muted '>Hello guys,</Card.Subtitle> */}
          <Card.Text>
          {text}
          </Card.Text>
          <div className='response'>
            <ul>
              <li><i class="fas fa-thumbs-up"></i> {likes}</li>
              <li><i class="fas fa-eye"></i> {views} </li>
              <li><i class="fas fa-comment-alt"></i> {comments} </li>
            </ul>
          </div>
          <div className='social-media'>
            <ul>
              <li> <img src="assets/img/facebook.svg" alt="facebook"/> </li>
              <li> <img src="assets/img/twitter.svg" alt="twitter"/> </li>
              <li> <img src="assets/img/linkedin.svg" alt="linkedin"/> </li>
            </ul>
          </div>
          <div className="add-comment">
          <p>add comment</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default class Timeline extends Component {
  static defaultProps = {
    user:[
      {
        name: 'darth vader',
        position: 'emperor @ galactic empire ',
        date: new Date().toUTCString(),
        likes: 311,
        views: 104,
        comments:12,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Leo a diam sollicitudin tempor. Faucibus nisl tincidunt eget nullam non nisi.',
        picture:'assets/img/Avatar9.jpg'
      }
    ],
    message:[
{
  name: 'tc trading',
  date: new Date().toUTCString(),
  likes: 111,
  text:'Hello guys, \n \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Leo a diam sollicitudin tempor. Faucibus nisl tincidunt eget nullam non nisi.',
  picture:'assets/img/Avatar8.jpg'
}
    ]
  }
  render () {
    const message = this.props.message.map((message, index)=>(
      <Message key={index} {...message}/>
    ))
    const post = this.props.user.map((user, index)=>(
      <Posts key={index} {...user}/>
    ))
    return (
      <div id='timeline'>
        <div >
          {message}
          {post}
        </div>
      </div>
    )
  }
}
