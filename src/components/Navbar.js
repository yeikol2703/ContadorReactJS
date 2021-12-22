import React from 'react'
export const Navbar = (props) => {
  const stylesNav = {
      marginTop: "300px",
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
        <div>
           <nav className="navbar navbar-light bg-light " style={stylesNav}>
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:3000/">{props.name}</a>
  </div>
</nav>
        </div>
    )
}
