import React, { useContext } from 'react'
import style from './section-c.module.css'
import store from '../../sore/Store'
export default function Section_C() {
    let {Link} = useContext(store)
    return (
        <>
            <div className={style.container}>
                <div className={`${style.element_1} ${style.elements}`}>
                    <div className={style.e_flex_left}>
                        <div className={style.heading}>
                            Operations
                        </div>
                    </div>
                    <div className={style.e_flex_middle}>
                        <div className={style.project_description}>
                            <div className={style.developer}>
                                Senior Project Manager
                            </div>
                            <div className={style.project_type}>
                                <div>Remote - EU or USA (pref EST)</div>
                                <div>  Full time</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.e_flex_left}>
                        <div className={style.open_btn}>
                            <button className={style.btn}>
                                <div className={style.text}><Link target='_blank' to="/career/Senior Project Manager" style={{textDecoration:'none', color: 'black'}}>Open</Link></div>
                                <div>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={`${style.element_2} ${style.elements}`}>
                    <div className={style.e_flex_left}>
                        <div className={style.heading}>
                            Design
                        </div>
                    </div>
                    <div className={style.e_flex_middle}>
                        <div style={{paddingLeft: '5em'}} className={style.project_description}>
                            <div className={style.developer}>
                                Design (Web & Brand )
                            </div>
                            <div className={style.project_type}>
                                <div>Remote - EU or USA (pref EST)</div>
                                <div>  Full time</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.e_flex_left}>
                        <div className={style.open_btn}>
                            <button className={style.btn}>
                                <div className={style.text}><Link target='_blank' to="/career/Designer (Web & Brand)" style={{textDecoration:'none', color: 'black'}}>Open</Link></div>
                                <div>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={`${style.element_3} ${style.elements}`}>
                    <div className={style.e_flex_left}>
                        <div className={style.heading}>
                            Development
                        </div>
                    </div>
                    <div className={style.e_flex_middles}>
                        <div className={style.e_flex_middle3}>
                            <div className={style.project_description}>
                                <div className={style.developer}>
                                    Creative Developer
                                </div>
                                <div className={style.project_type}>
                                    <div>Remote - EU or USA (pref EST)</div>
                                    <div>  Full time</div>
                                </div>
                            </div>
                            <div className={style.open_btn}>
                                <button className={style.btn}>
                                    <div className={style.text}><Link target='_blank' to='/career/Creative Developer' style={{textDecoration: 'none', color:'black'}}>Open</Link></div>
                                    <div>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className={`${style.e_flex_middle3} ${style.second_des}`}>
                            <div className={style.project_description}>
                                <div className={style.developer}>
                                    Webflow Developer
                                </div>
                                <div className={style.project_type}>
                                    <div>Remote - EU or USA (pref EST)</div>
                                    <div>  Full time</div>
                                </div>
                            </div>
                            <div className={style.open_btn}>
                                <button className={style.btn}>
                                    <div className={style.text}><Link target='_blank' to="/career/Webflow Developer" style={{textDecoration:'none', color: 'black'}}>Open</Link></div>
                                    <div>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div style={{border: 'none'}} className={`${style.element_4} ${style.elements}`}>
                    <div className={style.e_flex_left}>
                        <div className={style.heading}>
                            Growth
                        </div>
                    </div>
                    <div className={style.e_flex_middle}>
                        <div style={{paddingLeft: '19.1em'}} className={style.project_description}>
                            <div className={style.developer}>
                                Content & Community Marketing
                            </div>
                            <div style={{width:'max-content'}} className={style.project_type}>
                                <div>Remote - EU or USA (pref EST)</div>
                                <div>  Part time | 15 to 20 hrs/week (flexible schedule)</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.e_flex_left}>
                        <div className={style.open_btn}>
                            <button className={style.btn}>
                                <div className={style.text}><Link target='_blank' to="/career/Content & Community Marketing" style={{textDecoration:'none', color: 'black'}}>Open</Link></div>
                                <div>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
