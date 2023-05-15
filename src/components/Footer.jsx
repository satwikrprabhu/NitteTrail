import React from 'react';

const Footer = () => {
    const links = [{
        linkname: "Home",
        url: "#home",
      },
      {
        linkname: "About",
        url: "#about",
      },
      {
        linkname:"Contact",
        url:"#contact",
      },
      ];
  return (
    <footer className='text-center py-10 font-semibold bg-gray-800'>
      <p className="text-white">&copy;NitteTrail</p>
      <ul className='flex items-center justify-center space-x-20 mt-10 text-white'>
        {links.map((link)=><li>{link.linkname}</li>)}
      </ul>
    </footer>
  );
};

export default Footer;
