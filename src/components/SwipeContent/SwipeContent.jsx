import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ForYou from './ForYou/Foryou'
import Timeline from './Timeline/Timeline'
import Feed from './Feed/Feed'
import './SwipeContent.css'
export default class SwipeContent extends Component {
  render () {
    return (
      <div id='swipecontent'>
        <Container>
          <Row>
            <Col className='first' md={6} lg={3}><ForYou /></Col>
            <Col className='second' md={12} lg={6}><Timeline /></Col>
            <Col className='third' md={6} lg={3}><Feed /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
