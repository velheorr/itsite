import React, {useEffect, useState} from 'react';
import '../css.scss'
import {Button} from "@mui/material";

const Cookie = () => {
    const [cook, setCook] = useState(true)

    useEffect(()=>{
        let x = localStorage.getItem('cook')
        if (x === 'true'){
            setCookie()
        }
    },[])

    const setCookie = ()=>{
        setCook(false)
        localStorage.setItem('cook', 'true')
    }

    return (
        <>{
            cook && <div className='cookie' >
                    <div data-aos="fade-down">
                        <div>
                            Мы используем файлы <a href="/policy/CookieAgreement.pdf">cookie</a> , они помогают нам делать этот сайт удобнее для пользователя
                        </div>
                        <Button sx={{heigh: '30px', padding: '15px'}} variant='outlined' size={'small'} onClick={setCookie}>Понятно</Button>
                    </div>
                </div>
        }
        </>
    );
};

export default Cookie;