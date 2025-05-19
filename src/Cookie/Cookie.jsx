import React, {useState} from 'react';
import '../css.scss'
import {Button} from "@mui/material";

const Cookie = () => {
    const [cook, setCook] = useState(true)


    return (
        <>{
            cook && <div className='cookie' >
                    <div data-aos="fade-down">
                        <div>
                            Мы используем файлы <a href="/policy/CookieAgreement.pdf">cookie</a> , они помогают нам делать этот сайт удобнее для пользователя
                        </div>
                        <Button variant='outlined' size={'small'} onClick={()=>setCook(false)}>Понятно</Button>
                    </div>
                </div>
        }
        </>
    );
};

export default Cookie;