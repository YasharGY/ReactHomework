import style from "./header.module.css"
import image from  'C:\\Users\\Admin\\Desktop\\ReactHomework\\homework\\src\\arrow.png'
const Button = ({title}) => {
    return (
        <button className={style.HeaderButton}>
            {title}
            <img className='Arrow' src={image} />
        </button>
    );
}

export default Button;
