import React from 'react'
import Link from 'next/link'
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '.././templates/Footer'
import ImageGrid from '../grid/ImageGrid'

const aboutus = () => {
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

        <Section
          title={
            <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
              About <span className="text-primary-500">Us</span>
            </h1>
          }
        />
      </Background>
      
      <Section
        title="EXPERT TEAM"
        description={
          <p>“Our team is composed of a wide array of professionals with extensive industry experience. We have come together to create a company dedicated to bringing the highest quality products to the market while impacting each other’s lives in a positive way.
          <br/>
          <br/>
          Our array of services reflect the wide assortment of skills in our employee pool. We look forward to hearing about how we can improve your business.”</p>
        }
      />

      <Section yPadding="py-0" title="Meet Our Team"/>

      <ImageGrid className="mb-32"/>

      <Footer />
    </>
  )
}

export default aboutus