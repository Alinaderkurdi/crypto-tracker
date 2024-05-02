
'use client'

import Button from "@/custom-component/button/button";
import Wrapper from "@/custom-component/wrapper/wrapper";
import SearchFild from "@/custom-component/search-fild/search-fild";
import React ,{useEffect, useState, useRef}from "react";
import { useRouter } from 'next/navigation'
import style from './search-box.module.scss'
import Image from "next/image";
import icon from '../../../public/close-circle.svg';

 
const SearchBox = ()=>{
    const router = useRouter()
    const [searchParam, setSearchParam] = useState('')
    const  inputRef = useRef<HTMLInputElement>(null)
    const [showClearBT, setShowClearBT] = useState(false)

    const clearValue = ()=>{
        if(inputRef.current){
          inputRef.current.value = ''
          setShowClearBT(false)
        }
    }
    
    const searchValue = (value: string)=>{
       setSearchParam(value)
       if(value && value.length > 0){
        setShowClearBT(true)
       }else {
        setShowClearBT(false)
       }
    }

    const search = ()=>{
        setShowClearBT(false)
        if(searchParam && searchParam.trim()){
            router.push(`/?query=${searchParam}`)
        }
        if(inputRef.current){
            inputRef.current.value = ''
        }
    }

  //  useEffect(()=> {
       //to remove query after reload !
  //     return ()=>{
  //        console.log('return ()=>{}')
  //         router.push(`/`)
  //     }
  //  },  [])
   
    return(
        <Wrapper appendStyle={style['search-box']}>
            <SearchFild onChange={searchValue} placeholderText="Currency Name" ref={inputRef}/>
            <Button functionPointer={search} appendStyle={style['search-bt']}>
                Search
            </Button>
            {
              showClearBT &&
              <Button functionPointer={clearValue} appendStyle={style['clear-bt']}>
                <Image 
                 width={24}
                 height={24}
                 alt='clear_icon'
                 src={icon}
                />
               </Button>
            }
        </Wrapper>
    )
}


export default SearchBox