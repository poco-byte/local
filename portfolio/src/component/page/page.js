import React, { useEffect, useRef, useState } from 'react'
import styles from './page.scss';

function getIndex(position, height) {
    const currentindex = position / height;
    return Math.round(currentindex);
}

function Dots({ active, index, scroller }) {

    function clickHandler() {
        scroller(index)
    }

    return <div className={styles['dot'] + ' ' + (active ? styles['active'] : '')} onClick={clickHandler}></div>
}

function Nav({ value, scroller, index, theme }) {
    function clickHandler() {
        scroller(index)
    }
    return (
        <div className={styles['nav']} style={{ color: theme === 'dark' ? '#b29eff' : '#9d00ff' }} onClick={clickHandler}>
            {value}
        </div>
    )
}
export default function Page({ children }) {
    const pageref = useRef()

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTheme, setSelectedTheme] = useState('dark');

    const count = children.length;

    // console.log("Count: ", count)

    function scroller(index) {
        const height = pageref.current.clientHeight;
        document.getElementById('page').scrollTo({
            top: height * index,
            left: 0,
            behavior: 'smooth'
        })
        // console.log("Scroll: ", height, index)
    }

    function scrollListener(evt) {
        const scrollPosition = evt.target.scrollTop;
        const clientHeight = evt.target.clientHeight;
        const currentIndex = getIndex(scrollPosition, clientHeight)
        setSelectedIndex(currentIndex);
    }

    useEffect(() => {
        document.getElementById('page').addEventListener('scroll', scrollListener);
        return () => {
            document.removeEventListener('scroll', scrollListener);
        }
    }, [])

    useEffect(() => {
        const theme = children[selectedIndex].props.theme;
        // console.log("Theme: ", theme);
        setSelectedTheme(theme);
    }, [selectedIndex])


    return (
        <>
            <div className={styles['page']} id={'page'} ref={pageref}>
                {children}

            </div>
            <div className={styles['dots']}>
                {Array(count).fill(1).map((val, index) => {
                    return <Dots active={index === selectedIndex} scroller={scroller} index={index} key={index} />
                })
                }
            </div>
            <div className={styles['navbar']}>
                {children.map((val, idx) => <Nav value={val.props.name} index={idx} scroller={scroller} theme={selectedTheme} />)}
            </div>
        </>
    )
}
