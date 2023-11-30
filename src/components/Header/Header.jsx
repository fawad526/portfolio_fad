import React,{useRef,useEffect} from 'react'
import {Container} from  "reactstrap"
import "./header.css"


const navLinks=[
    {
        display:'Home',
        url:'#home'
    },
    {
        display:'About',
        url:'#about'
    },
    {
        display:'Services',
        url:'#services'
    },
    {
        display:'Portfolio',
        url:'#portfolio'
    },
    {
        display:'Contact',
        url:'#contact'
    },
]

const Header = () => {
    const phoneNumber = "923490565091"; // replace with your phone number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

    const headerRef = useRef(null);

    const menuRef = useRef(null)

    useEffect(()=>{
        const handleScroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              headerRef.current?.classList.add('header__shrink');
            } else {
              headerRef.current?.classList.remove('header__shrink');
            }
          };
        
          window.addEventListener('scroll', handleScroll);
        
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

        const menuToggle = ()=> menuRef.current.classList.toggle('menu__active')


        const handleClick=(e)=>{
            e.preventDefault();
            const targetAttr = e.target.getAttribute("href");
            const location = document.querySelector(targetAttr).offsetTop;
        
            window.scrollTo({
                left:0,
                top:location - 70,
            });
        };


  return (
  <header className="header" ref={headerRef}>
    <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo"><h5>Fawad</h5></div>
        
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
                {
                    navLinks.map((item,index)=>
                    <li className="nav__item" key={index}>
                    <a href={item.url} onClick={handleClick}>{item.display}</a>
                </li>
                )}               
            </ul>
        </div>
        <div className="nav__right d-flex align-items-center gap-4">
            <button className=" btn39"><a href={whatsappLink}> Lets Talk on Watsapp</a></button>
            <span className="mobile__menu"><i className="ri-menu-5-line" onClick={menuToggle}></i></span>
        </div>
        </div>
    </Container>
  </header>
)}
export default Header