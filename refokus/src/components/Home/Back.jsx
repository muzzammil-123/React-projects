import React from 'react'
import style from './back.module.css'
import Text from './Text'
export default function HomeBack() {
  return (
    <div style={{ position: 'relative', paddingBottom: '8vh', height: '950px' }}>
      <div className={style.back}>
      </div>
      <div className={style.black}></div>
      <div className={style.black2}>
        <Text />
      </div>
    </div>
  )
}
