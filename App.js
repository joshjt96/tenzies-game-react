import React from "react"
import Dice from "./components/Dice.js"

/**
 * Challenge:
 * 
 * - Create a Dice component that takes a `value` prop
 * - Render 10 instances of the Dice component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Dice> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Dice component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

// Up to Grid section styling

export default function App() {
    return (
        <main>
            <div>
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
                <Dice value={6} />
            </div>
        </main>   
    )
}