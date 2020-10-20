import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'
import { AuthContext } from '../context/AuthContext'

export default function LinksPage() {
    const {token} = useContext(AuthContext)
    const [links, setLinks] = useState([])
    const {request, loading} = useHttp()
  

    const getLink = useCallback(async () => {
        try {
            const fetchLinks = await request(`/api/link`, 'GET', null, { Authorization: `Bearer ${token}` })
            setLinks(fetchLinks)
        } catch (e) {}
    }, [token, request])
    

    useEffect(() => {
        getLink()
      }, [getLink])
    
      if (loading) {
        return <Loader />
      }
    return ( 
        <>
            { !loading && <LinksList links={links} />  }
        </>
    )
}
