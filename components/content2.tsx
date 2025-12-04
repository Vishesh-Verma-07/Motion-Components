import React from 'react'
import { Card } from './card'
import { GeistSans } from 'geist/font/sans';

function Content2() {
  return (
    <div className={`${GeistSans.className} h-screen flex items-center justify-center bg-gray-100`}>
        <Card />
    </div>
  )
}

export default Content2