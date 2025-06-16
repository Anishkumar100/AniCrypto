import React from 'react'
import { useEffect } from 'react'
export const DynamicTab = (content) => 
{
    useEffect(()=>
    {
        document.title=`${content}/ANICRYPTO`

    })
  return null
}
