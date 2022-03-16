import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useSearchBook(query, pageNum) {
     
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: {q: query, page: pageNum }
        }).then(res => {
            console.log(res.data)
        })
     }, [query, pageNum])
  
     return null
}
