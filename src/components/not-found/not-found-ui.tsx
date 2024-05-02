

import Wrapper from "@/custom-component/wrapper/wrapper";
import style from './not-found-ui.module.scss';
import Image from "next/image";
import icon from '../../../public/danger.svg'


type notFound = {
    meassge: string
}


const NotFoundUi = (props: notFound)=>{
    return(
        <Wrapper appendStyle={style['not-found']}>
            <div className={style['box']}>
              <Image 
              src={icon}
              width={40}
              height={40}
              alt='danger'/>
              <p className={style['text-style']}>{props.meassge}</p>
            </div>
        </Wrapper>
    )
}

export default NotFoundUi;