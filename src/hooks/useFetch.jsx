import React from 'react'
import { useState,useEffect,useCallback } from 'react'

export const useFetch = (url) => {

    const [result,setResult] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] =useState(false)

    const fetchOperation = useCallback(async ()=>
    {
        try 
        {
            setLoading(true)
            const response = await fetch(url)
            if(response.ok)
            {
                const finalRes=await response.json()
                setLoading(false)
                setResult(finalRes)

            }
            else
            {
                setLoading(false)
                setError(true)
                throw new Error(`The Api request is false`)
            }
            
        } 
        catch (error) 
        {
            console.log(`Error Occured 404`)
        }


    })

    useEffect(()=>
    {
        fetchOperation()
    },[url])


    return {result,loading,fetchOperation,error}
}
