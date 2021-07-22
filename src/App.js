import React, { useEffect, useState } from 'react';
import { Cover } from './components/cover/Cover';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/about/About';
import { Slider } from './components/slider/Slider';
import { Info } from './components/info/Info';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {

    const [scrollHeight, setScrollHeight] = useState( 0 );

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight( position );
    };

    const [show, setShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", handleScroll);
    }, [ scrollHeight ]);

    useEffect( () => {

        setShow(true);

    }, [])

    return <div className="App">
        <Navbar isScrolling={ scrollHeight }/>
        <Cover />
        <About />
        <Slider />
        <Info />
{        show && <Footer />
}    </div>;

}

export default App;