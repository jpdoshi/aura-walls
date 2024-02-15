import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <Image src='/logo.png' className='logo' width={72} height={72} />
            <div className='right'>
                <Image src='/search.svg' className='search' width={36} height={36} />
                <div className='hamburger-menu'>
                    <div className='pill'></div>
                    <div className='pill'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
