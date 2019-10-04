import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'
// import $ from 'jquery'
const Container = styled.div`
max-width 100%;
position: relative:
label{margin:0px; padding:0px;}
margin: auto;
clear:both;
overflow: auto;
background-color: #0092c4;

box-shadow: 4px -2px 15px #888888;
color:white;
select{font-family: 'Source Sans Pro', sans-serif;
  padding:0px;
};
option{height:20px;};
.navIcon{
  color:white;
  margin-right:45px;
  line-height:4.0;
  font-size:22px;
}
.navIconsRight{
position:absolute;
right:0px;
}
@media only screen and (max-width: 992px) {

  #responsiveSearch{
    margin-right:22px !important;
  }
  #sortBy{
    font-size:18px;
    padding-bottom:1px;
  }
  #dbSelect{
    width:97%;
  }
  #dbCountry{
    width:72%;
  }
  .responsiveLabel{
    font-size:11px !important;
  }
}

`
export const Nav = (props) =>
  <div>

    <Container className="row  justify-content-md-start " >
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="grad fixed-top col-sm-12 col-md-12 d-none d-sm-block text-center" href="#" style={{ backgroundImage: `url(${logo}),linear-gradient(#03b5f0, #005e8a)`, backgroundSize: 'auto', backgroundPosition: "left center", backgroundRepeat: `no-repeat,repeat`, height: '118px', color: 'white' }}><p className='mt-md-3' style={{ lineHeight: '5.0' }}></p></div>
          <div className='fixed-top col-sm-9 ml-sm-auto col-md-10' style={{ height: '87.5px' }}>
            <div className='navIconsRight mt-md-4'>
              <a className="navIcon d-none" style={{ fontSize: '16px' }} rel="noopener noreferrer" target="_blank" href={`/${localStorage.getItem("currentUser")}/360`}>Main</a>
              <a className="navIcon d-none" style={{ fontSize: '16px' }} href="/" onClick={() => { localStorage.clear() }}>Sign Out</a>
            </div>

          </div>
        </nav>
      </header>
    </Container>
  </div>