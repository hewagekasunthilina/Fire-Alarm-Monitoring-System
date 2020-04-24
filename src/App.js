import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {

  state = {
    collapseID: ''

  };

  toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ''
      }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {

    const overlay = (
        <div
            id='sidenav-overlay'
            style={{ backgroundColor: 'transparent' }}
            onClick={this.toggleCollapse('mainNavbarCollapse')}
        />
    );

    const { collapseID } = this.state;

    return (
        <Router>
          <div className='flyout'>
            <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
              <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                {/*<Logo style={{ height: '2.5rem', width: '2.5rem' }} />*/}
                <strong className='align-middle'>Fire Tracker</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                  onClick={this.toggleCollapse('mainNavbarCollapse')}
              />
              <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink
                        exact
                        to='/'
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      <strong>Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/AlarmList'
                    >
                      <strong>Alarms</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBTooltip
                        placement='bottom'
                        domElement
                        style={{ display: 'block' }}
                    >
                      <a
                          className='nav-link Ripple-parent'
                          href='https://mdbootstrap.com/products/react-ui-kit/'
                          target='_blank'
                          rel='noopener noreferrer'
                      >
                        <strong>
                          <MDBIcon icon='user-tie'
                                   solid
                                   className='white-text pr-2' />
                        </strong>
                      </a>
                      <span>PROFILE</span>
                    </MDBTooltip>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            {collapseID && overlay}
            <main style={{ marginTop: '4rem' }}>
              <Routes />
            </main>
            <MDBFooter color='indigo'>
              <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://www.MDBootstrap.com'> Monitoring.com </a>
              </p>
            </MDBFooter>
          </div>
        </Router>
    );
  }
}

export default App;
