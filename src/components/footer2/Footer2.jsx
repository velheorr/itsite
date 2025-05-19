import React from 'react';
import '../../css.scss'
import {Button, ButtonGroup} from "@mui/material";

const Footer2 = () => {
    return (
        <div className={'footer2'}>
            <a href="/policy/CookieAgreement.pdf">Соглашение об использования Coockie</a>
            <a href="/policy/Политика_конфиденциальности.pdf">Политика конфиденциальности</a>
        </div>
       /* <ButtonGroup className={'footer2'} variant="text" size={'small'} sx={{textAlign: 'center'}}>
            <Button >Соглашение об использования Coockie</Button>
            <Button> Политика конфиденциальности</Button>
        </ButtonGroup>*/
    );
};

export default Footer2;