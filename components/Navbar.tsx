import React, {useState} from 'react'

const Navbar = () => {

    const [menu, setmenu] = useState(false)

  return (
    <div className='navbar'>
        <div className="menu" onClick={() => setmenu(!menu)} >
            <div className={"line " + (menu ? "active" : "")}></div>
        </div>
        <div className={"mobileMenu " + (menu ? "active" : "")}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">More</a>
        </div>
    </div>
  )
}

export default Navbar