import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
const DropdownCom = () => {
    return (
        <div className='row'>
             <NavDropdown
                title="Tutorial"
                id='desktopDropdown'
                className='col'
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Blog"
                id='desktopDropdown'
                className='col'
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
        </div>
    );
}

export default DropdownCom;
