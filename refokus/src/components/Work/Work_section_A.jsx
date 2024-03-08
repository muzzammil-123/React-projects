import React, { useEffect, useState } from 'react';
import style from './work-section-a.module.css';

export default function WorkSectionA() {

    let useScrollTrigger = (offset) => {
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > offset);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [offset]);

        return isScrolled;
    }

    const onScroll = useScrollTrigger(250);
    const onScroll2 = useScrollTrigger(270);
    const onScroll3 = useScrollTrigger(290);
    const onScroll4 = useScrollTrigger(310);
    const onScroll5 = useScrollTrigger(330);
    const onScroll6 = useScrollTrigger(350);

    const renderImage = (src, className, isVisible) => (
        <img src={src} alt="" className={`${isVisible ? style.d_block : null} ${className} ${style.c_image}`} />
    );

    return (
        <section className={style.container}>
            <div className={style.child1}>
                <div className={style.wrapper}>
                    {renderImage("https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", style.cc_1, onScroll)}
                    {renderImage("https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", style.cc_2, onScroll2)}
                    {renderImage("https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", style.cc_3, onScroll3)}
                    {renderImage("https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", style.cc_4, onScroll4)}
                    {renderImage("https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", style.cc_5, onScroll5)}
                    {renderImage("https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", style.cc_6, onScroll6)}
                    <div className={style.work_text}>work</div>
                </div>
            </div>
        </section>
    );
}
