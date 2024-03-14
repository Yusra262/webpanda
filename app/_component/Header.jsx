import React from 'react'
import Hero from './Hero'
import Map from './Map'

export default function Header() {
    const Menu=[
        {
            id:1,
            
            name:'Articles',
            path:'/'
        },
        {
            id:2,
            name:'Tips',
            path:'/'
        },
        {
            id:3,
            name:'Resource',
            path:'/'
        },
        {
            id:4,
            name:'Explore',
            path:'/'
        },
    ]
  return (
    <div >

     <Hero/>
    </div>
  )
}
