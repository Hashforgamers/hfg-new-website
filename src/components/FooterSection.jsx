'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Gaming Cafes', href: '/gaming-cafes' },
        { label: 'Tournaments', href: '/tournaments' },
        { label: 'Shop Gear', href: '/shop' },
        { label: 'Rewards', href: '/rewards' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press Kit', href: '/press' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Terms of services', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' }
      ]
    },
    {
      title: 'For Business',
      links: [
        { label: 'List Your Cafe', href: '/list-cafe' },
        { label: 'Partner with us', href: '/partner' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/hashforgamers', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/hashforgamers', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@hashforgamers', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/hashforgamers', label: 'LinkedIn' }
  ];

  return (
    <footer className='bg-black text-gray-400 py-12 px-6 md:px-12 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Footer Links Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12'>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className='text-white font-bold text-lg mb-4'>
                {section.title}
              </h3>
              <ul className='space-y-3'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className='hover:text-green-400 transition-colors duration-200 text-sm md:text-base'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 mb-8'></div>

        {/* Social Links */}
        <div className='flex justify-center gap-6 mb-8'>
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition-colors duration-300'
              aria-label={social.label}
            >
              <social.icon size={20} className='text-white' />
            </Link>
          ))}
        </div>

        {/* Contact Email */}
        <div className='text-center mb-6'>
          <a 
            href='mailto:contact@hashforgamers.com'
            className='text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base'
          >
            contact@hashforgamers.com
          </a>
        </div>

        {/* Made with Love */}
        <div className='text-center mb-6'>
          <p className='text-sm md:text-base'>
            Made with <span className='text-red-500'>❤️</span> for Indian Gamers
          </p>
          <p className='text-green-400 text-sm mt-1'>#WhereIndiaGames</p>
        </div>

        {/* Copyright */}
        <div className='text-center text-xs md:text-sm text-gray-500'>
          <p>© 2025 HashForGamers. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
