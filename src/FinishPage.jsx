import React from 'react'

export default function FinishPage({total_points_to_get , final_points}) {
  return (
    <div>
      <h1>Text finished</h1>
      <h1>your score is {final_points} / {total_points_to_get}</h1>
    </div>
  )
}
