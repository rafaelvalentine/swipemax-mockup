import React, { Component } from 'react'
import './Foryou.css'




const Session = (props) => {
  const {name, position, picture} = props
return(
<div>
 <div className='session-content'>
   <img src={picture} alt={name}/>
   <div className='session-content-body'>
     <p>{name}</p>
     <span>
       {position}
     </span>
   </div>
   <span className='session-close'> 
   <i className="fas fa-times"></i>
   </span>
 </div>
</div>
)
}

const Insight = (props) => {
  const {name, position, picture, text} = props
return(
<div>
 <div className='insight-content'>
   <img src={picture} alt={name}/>
   <div className='insight-content-body'>
     <p>{name}</p>
     <span>
       {position}
     </span>
   </div>
   <span className='insight-close'> 
   <i className="fas fa-times"></i>
   </span>
 </div>
 <p className='insight-text'>
   {text}
  </p>
</div>
)
}
const Question = (props) => {
  const {question} = props
return(
<div>
 <div className='question-content'>
 <p>{question}</p>
 <span className='question-close'> 
   <i className="fas fa-times"></i>
  </span>
  </div>
</div>
)
}
export default class Foryou extends Component {
  static defaultProps = {
    session:[
      {
        name: 'yomi adedeji',
        position: 'managing direction @softcon',
        picture:'assets/img/avatar7.jpg'
      },
      {
        name: 'don jazzy',
        position: 'artiste CEO @mavin records',
        picture:'assets/img/avatar2.jpg'
      }
    ],
    insight:[
      {
        name: 'yomi adedeji',
        position: 'Co-founder @two-cents',
        picture:'assets/img/avatar3.jpg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'yomi adedeji',
        position: 'Co-founder @two-cents',
        picture:'assets/img/avatar8.jpg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ],
    questions:[
      {
        question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ]
  }
  render() {
    const session = this.props.session.map((user, index)=>(
      <Session key={index} {...user}/>
    ))
    const insight = this.props.insight.map((user, index)=>(
      <Insight key={index} {...user}/>
    ))
    const question = this.props.questions.map((question, index)=>(
      <Question key={index} {...question}/>
    ))
    return (
      <div id='foryou'>
        <div className='foryou-header'>
        <h5>FOR YOU</h5>
        </div>
        <div className='foryou-session'>
          <div className='header'>
            <p>SESSIONS</p>
            <i className='fa fa-sync'> refresh</i>
          </div>
          {session}
          
        </div>
        <div className='foryou-insight'>
        <div className='header'>
            <p>INSIGHT</p>
            <i className='fa fa-sync'> refresh</i>
          </div>
          {insight}
        </div>
        <div className='foryou-question'>
        <div className='header'>
            <p>QUESTIONS</p>
            <i className='fa fa-sync'> refresh</i>
          </div>
          {question}
        </div>
      </div>
    )
  }
}
