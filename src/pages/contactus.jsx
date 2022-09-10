import React from 'react'
import Link from 'next/link'
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

const contactus = () => {
  return (
    <>
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="aboutus">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              <a>Contact Us</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
    <div className="container mx-auto">
      <h1>Contact Us</h1>
    </div>
  </>
  )
}

export default contactus