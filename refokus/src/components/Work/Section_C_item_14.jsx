import React from 'react'

export default function Section_C_item_14({style, Hovered14, handleHover14, handleLeave14}) {
  return (
    <>
    <div className={style.container} style={{paddingTop: '0px'}}>
                <div className={style.relative}>
                    <div 
                    onMouseEnter={()=>handleHover14()} 
                    onMouseLeave={()=>{handleLeave14()}} 
                    className={`${style.wrapper} ${Hovered14 ? style.hovered : ''} ${Hovered14 ? style.bg14 : ''}`}>
                        <div className={style.text_wrapper}>
                            <h3>Haufe</h3>
                        </div>
                        <div className={`${style.onHover}`}>
                            <video preload='none' playsInline muted autoPlay loop width={"100%"} style={{ borderRadius: '16px' }}>
                                <source src="https://cdn.refokus.com/website/2022/videos/haufe.webm" />
                            </video>
                        </div>
                        <div className={style.flex_right}>
                            <div className={style.para} style={{marginBottom: '10px'}}>
                                <p>Besides the continuous work we do with Haufe—shipping over 50 projects per year—we partnered with them to create a new website for their core brand.</p>
                            </div>
                            <div className={style.btn_wrapper}>
                                <a href="https://www.arqitel.com/" target="_blank" rel="noreferrer">
                                    <button className={style.btn}>
                                        <div>Live Website</div>
                                        <div className={style.c_button_icon} >
                                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z" fill="currentColor" />
                                            </svg>
                                        </div>

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
