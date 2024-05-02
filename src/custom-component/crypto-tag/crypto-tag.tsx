
import Wrapper from "../wrapper/wrapper"
import style from './crypto-tag.module.scss';
import Image from "next/image";
import testImag from '../../../public/BTC.svg'


type cryptoTag = {
    name: string
    symbol: string
    id:number
    cryptoIMG: string
}

const CryptoTag = (props: cryptoTag)=>{
    const {name , id, symbol , cryptoIMG} = props
    return(
       <Wrapper appendStyle={style['crypto-tag']}>
           <Image 
            className={style['crypto-img']}
            width={64}
            height={64}
            alt={name}
            src={testImag}//cryptoIMG
           />
           <div className={style['lable-box']}>
            <div className={style['lable']}>
              <p className={style['lable-text']}>Name</p>
              <h1 className={style['lable-name']}>{name}</h1>
            </div>
            <hr></hr>
            <div className={style['lable']}>
              <p className={style['lable-text']}>Symbol</p>
              <h3 className={style['lable-name']}>{symbol}</h3>
            </div>
            <hr></hr>
            <div className={style['lable']}>
              <p className={style['lable-text']}>ID</p>
              <h3 className={style['lable-name']}>{`#${id.toString()}`}</h3>
            </div>
            <hr></hr>
           </div>
       </Wrapper>
    )
}

export default CryptoTag;