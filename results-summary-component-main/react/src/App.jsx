import { useState } from 'react'

import MarkBox from './components/MarkBox'
import scores from "../../data.json";
import classes from "./App.module.css"
console.log(scores);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className={classes.container}>
        <section className={classes.firstHalf}>
          <h3>Your Result</h3>
          <div className="final-result-circle">

          </div>
          <h2 className="verbal-result"></h2>
          <p className="result-para">

          </p>
        </section>
        <section className={classes.secondHalf}>
        <h2>Summary</h2>
        {scores.map((score) =>(
          <MarkBox 
            category={score.category}
            icon={score.icon}
            score={score.score} >

            </MarkBox>
        ))}
        
        <button className="section_second-half--continueBtn">Continue</button>
        </section>
      </main>
    </>
  )
}

export default App
