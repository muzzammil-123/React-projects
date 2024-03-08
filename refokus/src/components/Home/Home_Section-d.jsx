import React from 'react'
import style from './home-section-d.module.css'
export default function Home_Sectiond() {
    return (
        <>
            <div className={style.container}>
                <div className={style.c_flex_left}>
                    <div className={style.c_heading}>
                        Forward <br />  –Thinking
                    </div>
                    <div className={style.c_para}>
                        A fully remote team composed of bright, diverse and caring individuals - all focused on building the next generation of world-className brands and websites.
                    </div>
                </div>
                <div className={style.c_flex_right}>
                    <video src='https://cdn.refokus.com/website/people-short.webm' muted preload='none' loop autoPlay playsInline className={style.c_video}>
                    </video>
                </div>
            </div>
        </>
    )
}
