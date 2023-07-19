import React, { Fragment, useEffect, useState } from 'react'
import Square from './Square';

export default function Chessboard() {
  const [chessboard,setChessboard]=useState([])

  const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


  useEffect(() => {
    chargeChessboard()
  }, []);

  const chargeChessboard=()=>{
    let table=[]
    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        table.push({
          black:isBlack
        })
      }
    }
    setChessboard(table)
  }

  return (
    <div className='chess-container'>
      <div className='nums'>
        {row.map((label, i) => (
          <div key={i} className="box-let-num">
            {label}
          </div>
        ))}
      </div>
      <div className='chessboard'>
        {chessboard.length!==0 && chessboard.map((obj,i)=>{
          return(
            <Fragment key={i}>
              <Square isBlack={obj.black}/>
            </Fragment>
          )
        })}
        {column.map((label, i) => (
          <div key={i} className="box-let-num">
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

