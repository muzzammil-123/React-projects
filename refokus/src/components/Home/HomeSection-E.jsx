import React, { useContext } from 'react'
import style from './home-section-e.module.css'
import store from '../../sore/Store'
export default function HomeSectionE() {
    let { Link } = useContext(store)
    return (
        <>
            <div className={style.container}>
                <div className={style.c_container}>
                   <a href="/work" className={style.c_flex_left}>
                        <div className={style.cc_flex_top}>
                            <div className={style.cc_service_header}>
                                <div className={style.cc_text}>Up Next: Projects</div>
                                <div class="c-footer-ctas-arrow w-embed"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="currentColor"></path>
                                </svg></div>
                            </div>
                            <div className={style.cc_title}>
                                <div className={style.cc_text6}>Projects & Case Studies</div>
                            </div>
                        </div>
                        <div className={style.cc_flex_bottom}>
                            <div className={style.cc_text}>From Brands to Websites, our work speaks for itself.</div>
                        </div>
                   </a>
                    <div className={style.c_flex_right}>
                        <div className={style.cc_flex_top}>
                            <div className={style.cc_service_header}>
                                <div className={style.cc_text}>Get In Touch</div>
                                <div class="c-footer-ctas-arrow w-embed"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="currentColor"></path>
                                </svg></div>
                            </div>
                            <p className={style.c_title_6}>Let’s get to it,<br />together.</p>
                        </div>
                        <div className={`${style.cc_flex_bottoms} ${style.cc_git}`}>
                            <div className={style.c_footer_title}>
                                <h3 className={style.c_title_3}>Start a Project<br /></h3>
                            </div>
                            <div className={`${style.c_button_m} ${style.cc_secondary}`}>
                                <div className={style.c_button_content_wrapper}>
                                    <div className={style.c_button_text}>Contact us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
