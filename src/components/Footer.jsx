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
    <footer className='text-center w-full py-8 font-semibold bg-gray-900 bottom-0 font-Poppins'>
      <p className="text-white mb-6">&copy;NitteTrail</p>
      <p className="text-white mb-6 text-center">Made with ❤️ by Satwik Prabhu</p>
      <ul className='flex items-center justify-center space-x-20  text-white'>
        {links.map((link)=><li>{link.linkname}</li>)}
      </ul>
    </footer>
  );
};

export default Footer;
