import React from 'react'
import style from './text.module.css'
export default function Content() {
  return (
    <>
          <div className={style.refokusLogo}>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg" alt="" />
          </div>
      <div className={style.par}>
        <div className={style.uniqueText}>
          Unique Websites
        </div>
        <div className={style.flexRightSide}>
          <div className={style.drivenBy}>
              <p>DRIVEN BY DESIGN</p>
              <p>EMPOWERED BY TECHNOLOGY</p>
              <p>INNOVATIVE BY NATURE</p>
          </div>
        </div>
      </div>
    </>
  )
}
