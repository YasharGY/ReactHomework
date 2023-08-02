import style from "./header.module.css"
import image from  'C:\\Users\\HP\\Desktop\\ReactHomework\\src\\arrow.png'
const Button = ({title}) => {
    return (
        <button className={style.HeaderButton}>
            {title}
            <img className='Arrow' src={image} />
        </button>
    );
}

export default Button;
