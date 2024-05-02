'use client'


import style from './search-fild.module.scss';
import React, {useRef, useState , forwardRef, } from 'react';
import Button from '../button/button';
import Image from 'next/image';
import closeIcon from '../../../public/close-circle.svg';

type searchFild = {
    placeholderText : string
    appendStyle?:string
    onChange: (value:string)=> void
}


const SearchFild = forwardRef<HTMLInputElement,searchFild>(function SearchFild(props, ref){

    const { placeholderText, appendStyle, onChange} = props
  
    return (
      <div className={style['input-wrapper']}>
        <input ref={ref}  onChange={(e)=>{
            onChange(e.target.value)
        }} className={`${style['search-fild']} ${appendStyle ? appendStyle : appendStyle}`} placeholder={placeholderText}/>

       </div>
    )
})

export default SearchFild;