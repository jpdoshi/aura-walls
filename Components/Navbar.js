'use client'

import Image from 'next/image'
import '@/Styles/navbar.css'

export const Navbar = () => {
  const menuHandler = () => {
    let menuIcon = document.getElementById('menu-icon');
    let sideMenu = document.getElementById('side-menu').getElementsByClassName('wrapper')[0];

    let pill1 = menuIcon.getElementsByClassName('pill')[0];
    let pill2 = menuIcon.getElementsByClassName('pill')[1];

    if (sideMenu.style.opacity == '1') {
      sideMenu.style.transform = 'scaleX(0)';
      sideMenu.style.opacity = '0';

      pill1.style.transform = 'rotate(0deg)';
      pill2.style.transform = 'rotate(0deg)';
    } else {
      sideMenu.style.transform = 'scaleX(1)';
      sideMenu.style.opacity = '1';

      pill1.style.transform = 'translateY(7px) rotate(45deg)';
      pill2.style.transform = 'translateY(-7px) rotate(-45deg)';
    }
  }

  const searchHandler = () => {
    let searchBar = document.getElementById('search-bar');

    if (searchBar.style.opacity == '1') {
      searchBar.style.opacity = '0';
      searchBar.style.transform = 'scaleX(0)';
    } else {
      searchBar.style.opacity = '1';
      searchBar.style.transform = 'scaleX(1)';
    }
  }
  return (
    <>
      <div className='navbar'>
        <div className='wrapper'>
          <Image src='/logo.png' alt='logo.png' width={52} height={52} />
          <div className='right'>
            <Image src='/search.svg' alt='search.svg' id='search' width={28} height={28} onClick={searchHandler} />
            <div id='menu-icon' onClick={menuHandler}>
              <div className='pill'></div>
              <div className='pill'></div>
            </div>
          </div>
        </div>
      </div>
      <div id='side-menu'>
        <div className='wrapper'>
          <h2>NAVIGATION</h2>
          <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='/#categories'>CATEGORIES</a></li>
            <li><a href='/#mobile'>MOBILE</a></li>
            <li><a href='/#desktop'>DESKTOP</a></li>
            <li><a href='/#about'>ABOUT</a></li>
          </ul>
          <hr color='#ddd' style={{ margin: '32px 12px' }} />
          <h2>TAGS</h2>
        </div>
      </div>
      <form className='search-wrapper'>
        <input type='text' id='search-bar' placeholder='SEARCH LIT WALLPAPERS' />
      </form>
    </>
  )
}
