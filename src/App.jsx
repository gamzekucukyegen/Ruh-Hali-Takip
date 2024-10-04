import { useState } from 'react'
import diaryData from './diaryData'
import DiaryCard from './components/DiaryCard'
import Menu from './components/Menu'
import './styles.css'
export default function App() {
  
  return (
    <div>
      <Menu skip={false} />
      <main className='main-container'>
        <div className='sub-header'>
          <h3>Nisan Raporu</h3>
        </div>
       {diaryData.map((card,)=>(
        <DiaryCard key={card.id}
        date={card.date}
        rating={card.rating}
        emotions={card.emotions}
        activities={card.activities}
        note={card.note}
        />
       ))} 
      </main>
    </div>
  )
}