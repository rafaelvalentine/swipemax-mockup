import React, { Component } from 'react'
import { OverlayTrigger, Popover, ButtonToolbar, Dropdown } from 'react-bootstrap'

export default class EmailDropdown extends Component {
  render () {
    return (
      <div>
        <ButtonToolbar>
          <Dropdown>
            <Dropdown.Toggle id='usermenu-dropdown'>
              <img style={{ margin: '10px', width: '30px', height: '30px', borderRadius: '20px' }} src='assets/img/avatar5.jpg' alt='User' />
            </Dropdown.Toggle>
            <Dropdown.Menu className='usermenu-dropdown-list'>
              <Dropdown.Item eventKey='1'>
                <i class='fas fa-user' /> User
              </Dropdown.Item>
              <Dropdown.Item eventKey='2'>
                <i class='fas fa-envelope-open' /> messages
              </Dropdown.Item>
              <Dropdown.Item eventKey='3' active>
                <i class='fas fa-cogs' /> settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='4'><i class="fas fa-exclamation-circle"></i>about</Dropdown.Item>
              <Dropdown.Item eventKey='5'><i class="fas fa-newspaper"></i>news</Dropdown.Item>
              <Dropdown.Item eventKey='6'><i class="fas fa-address-book"></i>contacts</Dropdown.Item>
              <Dropdown.Item eventKey='7'><i class="fas fa-question-circle"></i>FAQs</Dropdown.Item>
              <Dropdown.Item eventKey='8'><i class="fas fa-file-contract"></i>legal</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='9'><i class="fas fa-power-off"></i>logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* {['bottom'].map(placement => (
            <OverlayTrigger
              trigger='click'
              key={placement}
              placement={placement}
              overlay={
                <Popover
                  id={`popover-positioned-${placement}`}
                  title={`Popover ${placement}`}
                >
                  <strong>Holy guacamole!</strong> Check this info.
                </Popover>
              }
            >
              <img style={{ margin: '10px', width: '30px', height: '30px', borderRadius: '20px' }} src='assets/img/avatar5.jpg' alt='User' />
            </OverlayTrigger>
          ))} */}
        </ButtonToolbar>
      </div>
    )
  }
}
