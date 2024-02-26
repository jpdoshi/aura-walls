'use client'

import Image from 'next/image'
import '@/Styles/navbar.css'

export const Navbar = () => {
  const menuHandler = () => {
    let sideMenu = document.getElementById('side-menu').getElementsByClassName('wrapper')[0];

    if (sideMenu.style.opacity == '1') {
      closeMenu();
    } else {
      openMenu();
      closeSearch();
    }
  }

  const searchHandler = () => {
    let searchBar = document.getElementById('search-bar');

    if (searchBar.style.opacity == '1') {
      closeSearch();
    } else {
      openSearch();
      closeMenu();
    }
  }

  const openMenu = () => {
    let sideMenu = document.getElementById('side-menu').getElementsByClassName('wrapper')[0];
    let menuIcon = document.getElementById('menu-icon');

    let pill1 = menuIcon.getElementsByClassName('pill')[0];
    let pill2 = menuIcon.getElementsByClassName('pill')[1];

    sideMenu.style.transform = 'scaleX(1)';
    sideMenu.style.opacity = '1';
    document.getElementById('side-menu').style.zIndex = '1';

    pill1.style.transform = 'translateY(6.5px) rotate(45deg)';
    pill2.style.transform = 'translateY(-6.5px) rotate(-45deg)';
  }

  const closeMenu = () => {
    let sideMenu = document.getElementById('side-menu').getElementsByClassName('wrapper')[0];
    let menuIcon = document.getElementById('menu-icon');

    let pill1 = menuIcon.getElementsByClassName('pill')[0];
    let pill2 = menuIcon.getElementsByClassName('pill')[1];

    sideMenu.style.transform = 'scaleX(0)';
    sideMenu.style.opacity = '0';
    document.getElementById('side-menu').style.zIndex = '-1';

    pill1.style.transform = 'rotate(0deg)';
    pill2.style.transform = 'rotate(0deg)';
  }

  const openSearch = () => {
    let searchBar = document.getElementById('search-bar');

    searchBar.style.opacity = '1';
    searchBar.style.transform = 'scaleX(1)';

    document.getElementById('search-wrapper').style.zIndex = '1';
    searchBar.focus();
  }

  const closeSearch = () => {
    let searchBar = document.getElementById('search-bar');

    searchBar.style.opacity = '0';
    searchBar.style.transform = 'scaleX(0)';
    document.getElementById('search-wrapper').style.zIndex = '-1';
  }

  return (
    <>
      <div className='navbar'>
        <div className='wrapper'>
          <Image src='/logo.png' className='logo' alt='logo.png' width={182} height={48} onClick={() => {document.location.href = '/'}} />
          <div className='right'>
            <Image src='/search.svg' alt='search.svg' id='search' width={36} height={36} onClick={searchHandler} />
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
            <li><a href='/#lit-walls'>LIT WALLS</a></li>
            <li><a href='/#tags'>TAGS</a></li>
            <li><a href='/#mobile'>MOBILE</a></li>
            <li><a href='/#desktop'>DESKTOP</a></li>
            <li><a href='https://github.com/jpdoshi/aura-walls'>GITHUB</a></li>
            <li><a href='/#about'>ABOUT</a></li>
          </ul>
        </div>
      </div>
      <form action='/search' method='GET' id='search-wrapper'>
        <input type='text' name='q' id='search-bar' placeholder='SEARCH WALLPAPERS' />
      </form>
    </>
  )
}
