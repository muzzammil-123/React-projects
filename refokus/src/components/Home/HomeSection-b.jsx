import React from 'react'
import List_item_2 from './List_item-2'
import List_item_1 from './List_item-1'
import List_item_3 from './List_item-3'
import List_item_4 from './List_item-4'
import List_item_5 from './List_item-5'
import List_item_6 from './List_item-6'
import style from './home_section_b.module.css'
export default function HomeSectionB() {
  return (
    <>
        <div className={style.container}>
        <div className={style.container_list}>
         <List_item_1 />
         <List_item_2/>
         <List_item_3 />
         <List_item_4/>
         <List_item_5/>
         <List_item_6/>
        </div>
      </div>
    </>
  )
}
