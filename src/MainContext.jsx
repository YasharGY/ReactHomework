import React from 'react';
import { Cart } from './Cart';
import style from './Content.module.css'
import Image1 from 'C:\\Users\\HP\\Desktop\\ReactHomework\\src\\we_icon_1.svg'
import Image2 from 'C:\\Users\\HP\\Desktop\\ReactHomework\\src\\we_icon_2.svg'
import Image3 from 'C:\\Users\\HP\\Desktop\\ReactHomework\\src\\we_icon_3.svg'


const Main = () => {
    return (
        <div className={style.CartContainer}>
            <Cart imageSrc={Image1} title="AI & ML based scoring" description="We determine the credit-worthiness of each client, using behavioral scoring model." />
            <Cart imageSrc={Image2} title="Micro-lending technology" description="We deliver microlending solution which includes processing, disbursement, repayment, recovery and management of loans." />
            <Cart imageSrc={Image3} title="Big data engine" description="We use latest advancements in Artificial Intelligence and Machine Learning to maximize our value proposition." />
        </div>
    );
}

export default Main;
