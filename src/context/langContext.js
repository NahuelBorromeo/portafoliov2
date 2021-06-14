import React, { useState } from 'react';
import messagesEnglish from '../lang/en-US.json';
import mensajesEspañol from '../lang/es-ES.json';
import {IntlProvider} from 'react-intl';

export const langContext = React.createContext();

export const LangProvider = ({children}) => {

    let localeDefault;
    let messagesDefault;
    const lang = localStorage.getItem('lang');

    if(lang){
        localeDefault = lang;
        if(localeDefault === 'es-ES'){
            messagesDefault = mensajesEspañol;
        } else if(lang === 'en-US'){
            messagesDefault = messagesEnglish;
        } else {
            localeDefault = 'en-US';
            messagesDefault = messagesEnglish;
        }
    }

    const [mensajes, setMensajes] = useState(messagesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const establecerLenguaje = (lenguaje) => {
        switch (lenguaje){
            case 'es-ES':
                setMensajes(mensajesEspañol);
                setLocale('es-ES');
                localStorage.setItem('lang', 'es-ES');
                break;
            case 'en-US':
                setMensajes(messagesEnglish);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMensajes(messagesEnglish);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }
    
    return (
        <langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
