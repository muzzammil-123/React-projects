import React from 'react'
import style from './list-item-1.module.css'
export default function list_item_1() {
  return (
    <>
      <div className={style.container_list_item}>
        <div className={style.portfolio}
          style={{
            backgroundImage:'url(https://assets-global.website-files.com/6334198f239547f2fccd84c1/63aed9f09c26951effaa9c27_rainfall.svg)',
            backgroundColor:'hsla(237.27272727272725, 86.27%, 60.00%, 1.00)'
          }}
        >
          <div className={style.portfolio_flex}>
            <div className={style.flex_col_left}>
              <div className={style.card}>
              <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1484100f8f5bcf07e5_9.jpg" loading="lazy" alt="" sizes="(max-width: 991px) 100vw, 400px" srcset="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1484100f8f5bcf07e5_9-p-500.jpg 500w, https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1484100f8f5bcf07e5_9.jpg 800w" class="image"/>
              </div>
              <div className={style.card2}>
              <img style={{width:'679.99px'}} src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8.jpg" loading="eager" alt="" sizes="(max-width: 479px) 90vw, (max-width: 991px) 92vw, 70vw" srcset="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8-p-500.jpg 500w, https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8-p-800.jpg 800w, https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8-p-1080.jpg 1080w, https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8.jpg 1320w" class="image"/>
              </div>
            </div>
            <div className={style.flex_col_right}>
              <div className={style.porfolio_card}>
                <div className={style.video_embed}>
                  <video preload='none' playsInline muted autoPlay loop width={"100%"} style={{ borderRadius: '16px' }}>
                    <source src='https://cdn.refokus.com/website/2022/videos/rainfall.webm' />
                  </video>
                </div>
              </div>
              <div className={style.portfolio_text}>
                <p className={style.title}>
                We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.</p>
                <div className={style.btn_visit}>
                  <div>
                    <a href="https://www.arqitel.com/" target="_blank" className={style.c_button_m}>
                      <div className={style.c_button_content_wrapper}>
                        <div className={style._button_text} style={{ transform: 'translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Visit Website</div>
                      </div>
                      <div className={style.c_button_content_wrapper}><div className={`${style.c_button_icon} ${style.cc_small} ${style.w_embed}`} style={{ transform: 'translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.99611H0.4L0.4 6.59611H1L1 5.99611ZM11 5.99611L11.4364 6.40786C11.6547 6.17654 11.6545 5.81511 11.4361 5.58398L11 5.99611ZM7.18672 1.08787C6.95911 0.847041 6.57936 0.836326 6.33853 1.06394C6.0977 1.29155 6.08699 1.6713 6.3146 1.91213L7.18672 1.08787ZM6.31425 10.0882C6.08684 10.3293 6.09788 10.709 6.33891 10.9364C6.57994 11.1638 6.95968 11.1528 7.18708 10.9118L6.31425 10.0882ZM0.4 1.77636L0.4 5.99611H1.6L1.6 1.77636H0.4ZM1 6.59611L11 6.59611V5.39611H1L1 6.59611ZM11.4361 5.58398L7.18672 1.08787L6.3146 1.91213L10.5639 6.40824L11.4361 5.58398ZM10.5636 5.58436L6.31425 10.0882L7.18708 10.9118L11.4364 6.40786L10.5636 5.58436Z" fill="currentColor" />
                      </svg>
                      </div>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
