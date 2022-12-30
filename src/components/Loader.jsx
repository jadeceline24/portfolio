import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false)
    useEffect( ()=>{
        const t = setTimeout( ()=>{
            setLoading(true)
        },3000)
        return () => {
            clearTimeout(t)
        }
    })
  return (
   

  )
}

export default Loader