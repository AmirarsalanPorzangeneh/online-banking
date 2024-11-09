import React from 'react'

export default function ContainerTheme({children}) {
  return (
    <div className=' h-full' style={{background:'#111928'}}>
        {children}
    </div>
  )
}
