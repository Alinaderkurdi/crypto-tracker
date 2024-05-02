
import style from './button.module.scss'

type buttonType = {
    children?: React.ReactNode
    appendStyle?: string
    functionPointer: ()=> void
}

const Button = (props: buttonType)=>{
    const {children, appendStyle , functionPointer} = props
    
  return(
    <button onClick={functionPointer} className={`${style['custom-button']} ${appendStyle ? appendStyle : ''}`}>{children}</button>
  )
}

export default Button;