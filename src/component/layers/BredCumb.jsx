'use client'
import React from 'react'
import Link from 'next/link'
import Container from '@/app/component/layers/Container'
import { usePathname } from 'next/navigation'

const BredCumb = () => {
  const pathname = usePathname()
  return (
    <div className=''>
        Home / {pathname.split("/")[1]?pathname.split("/")[1]:"BredCumb"}
    </div>
  )
}

export default BredCumb