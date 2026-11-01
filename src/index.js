import "./styles.css"
import { page1Load } from "./p1.js"
import { page2Load } from "./p2.js"
import { wipeScreen } from "./wipe.js"
import { page3Load } from "./p3.js"

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if (e.target.textContent === "Home"){
            wipeScreen()
            page1Load()
        }else if (e.target.textContent === "Menu"){
            wipeScreen()
            page2Load()
        }else if (e.target.textContent === "About"){
            wipeScreen()
            page3Load()
        }
    })
})

page1Load()