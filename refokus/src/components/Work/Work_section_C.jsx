import React, { useState } from 'react'
import Section_C_item_1 from './Section_C_item_1'
import Section_C_item_2 from './Section_C_item_2'
import style from './work-section-c.module.css'
import Section_C_item_3 from './Section_C_item_3'
import Section_C_item_4 from './Section_C_item_4'
import Section_C_item_5 from './Section_C_item_5y'
import Section_C_item_6 from './Section_C_item_6'
import Section_C_item_7 from './Section_C_item_7'
import Section_C_item_8 from './Section_C_item_8'
import Section_C_item_9 from './Section_C_item_9'
import Section_C_item_10 from './Section_C_item_10'
import Section_C_item_11 from './Section_C_item_11'
import Section_C_item_12 from './Section_C_item_12'
import Section_C_item_14 from './Section_C_item_14'
import Section_C_item_13 from './Section_C_item_13'
export default function Work_section_C() {
    let [Hovered, setHovered] = useState(false)
    let [Hovered2, setHovered2] = useState(false)
    let [Hovered3, setHovered3] = useState(false)
    let [Hovered4, setHovered4] = useState(false)
    let [Hovered5, setHovered5] = useState(false)
    let [Hovered6, setHovered6] = useState(false)
    let [Hovered7, setHovered7] = useState(false)
    let [Hovered8, setHovered8] = useState(false)
    let [Hovered9, setHovered9] = useState(false)
    let [Hovered10, setHovered10] = useState(false)
    let [Hovered11, setHovered11] = useState(false)
    let [Hovered12, setHovered12] = useState(false)
    let [Hovered13, setHovered13] = useState(false)
    let [Hovered14, setHovered14] = useState(false)
    let handleHover = () => {
        setHovered(true)
    }

    let handleLeave = () => {
        setHovered(false)
    }
    let handleHover2 = () => {
        setHovered2(true)
    }

    let handleLeave2 = () => {
        setHovered2(false)
    }
    let handleHover3 = () => {
        setHovered3(true)
    }

    let handleLeave3 = () => {
        setHovered3(false)
    }
    let handleHover4 = () => {
        setHovered4(true)
    }

    let handleLeave4 = () => {
        setHovered4(false)
    }
    let handleHover5 = () => {
        setHovered5(true)
    }

    let handleLeave5 = () => {
        setHovered5(false)
    }
    let handleHover6 = () => {
        setHovered6(true)
    }

    let handleLeave6 = () => {
        setHovered6(false)
    }
    let handleHover7 = () => {
        setHovered7(true)
    }

    let handleLeave7 = () => {
        setHovered7(false)
    }
    let handleHover8 = () => {
        setHovered8(true)
    }

    let handleLeave8 = () => {
        setHovered8(false)
    }
    let handleHover9 = () => {
        setHovered9(true)
    }

    let handleLeave9 = () => {
        setHovered9(false)
    }
    let handleHover10 = () => {
        setHovered10(true)
    }

    let handleLeave10 = () => {
        setHovered10(false)
    }
    let handleHover11 = () => {
        setHovered11(true)
    }

    let handleLeave11 = () => {
        setHovered11(false)
    }
    let handleHover12 = () => {
        setHovered12(true)
    }

    let handleLeave12 = () => {
        setHovered12(false)
    }
    let handleHover13 = () => {
        setHovered13(true)
    }

    let handleLeave13 = () => {
        setHovered13(false)
    }
    let handleHover14 = () => {
        setHovered14(true)
    }

    let handleLeave14 = () => {
        setHovered14(false)
    }
    return (
        <>
            <Section_C_item_1 style={style} Hovered={Hovered} handleHover={handleHover} handleLeave={handleLeave}/>
            <Section_C_item_2 style={style} Hovered2={Hovered2} handleHover2={handleHover2} handleLeave2={handleLeave2}/>
            <Section_C_item_3 style={style} Hovered3={Hovered3} handleHover3={handleHover3} handleLeave3={handleLeave3}/>
            <Section_C_item_4 style={style} Hovered4={Hovered4} handleHover4={handleHover4} handleLeave4={handleLeave4}/>
            <Section_C_item_5 style={style} Hovered5={Hovered5} handleHover5={handleHover5} handleLeave5={handleLeave5}/>
            <Section_C_item_6 style={style} Hovered6={Hovered6} handleHover6={handleHover6} handleLeave6={handleLeave6}/>
            <Section_C_item_7 style={style} Hovered7={Hovered7} handleHover7={handleHover7} handleLeave7={handleLeave7}/>
            <Section_C_item_8 style={style} Hovered8={Hovered8} handleHover8={handleHover8} handleLeave8={handleLeave8}/>
            <Section_C_item_9 style={style} Hovered9={Hovered9} handleHover9={handleHover9} handleLeave9={handleLeave9}/>
            <Section_C_item_10 style={style} Hovered10={Hovered10} handleHover10={handleHover10} handleLeave10={handleLeave10}/>
            <Section_C_item_11 style={style} Hovered11={Hovered11} handleHover11={handleHover11} handleLeave11={handleLeave11}/>
            <Section_C_item_12 style={style} Hovered12={Hovered12} handleHover12={handleHover12} handleLeave12={handleLeave12}/>
            <Section_C_item_13 style={style} Hovered13={Hovered13} handleHover13={handleHover13} handleLeave13={handleLeave13}/>
            <Section_C_item_14 style={style} Hovered14={Hovered14} handleHover14={handleHover14} handleLeave14={handleLeave14}/>
         </>
    )
}
