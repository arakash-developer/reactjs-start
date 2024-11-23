import Link from 'next/link'
import React from 'react'


const Li = ({liText,to,className}) => {
  return (
    <>
        <li>
            <Link className={` ${className}`} href={to}>{liText}</Link>
        </li>
    </>
  )
}

export default Li