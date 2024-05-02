
import style from './wrapper.module.scss';


type wrapper = {
    children?: React.ReactNode
    appendStyle?: string
}


const Wrapper = (props: wrapper)=>{
    const {children, appendStyle } = props
    return <div className={`${style['wrapper']} ${appendStyle ? appendStyle : ''}`}>{children}</div>
}

export default Wrapper;