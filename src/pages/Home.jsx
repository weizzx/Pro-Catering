import '../css/Home.css'
import Icon1 from "../assets/icons/i1.svg"
import Icon2 from "../assets/icons/i2.svg"
import Icon3 from "../assets/icons/i3.svg"
import Icon4 from "../assets/icons/i4.svg"

export function Home() {
    return (
        <div className="home">
            <div className="inner">
                <div className="context">
                    <h4>Vítejte na stránkách, kde se z vaší akce stane úžasný zážitek!</h4>
                    <h5>Naše společnost se specializuje na catering pro různé typy událostí, od malých soukromých oslav až po velké firemní akce.</h5>
                </div>
                <div className="icon-section">
                    <div className="i i1">
                        <img src={ Icon1 } alt="" />
                        <p>Máme přes 30 let zkušeností</p>
                    </div>
                    <div className="i i2">
                        <img src={ Icon2 } alt="" />
                        <p>Zákládáme si dlouhodobé spolupráci</p>
                    </div>
                    <div className="i i3">
                        <img src={ Icon3 } alt="" />
                        <p>Vždy držíme termíny a sjednané dohody</p>
                    </div>
                    <div className="i i4">
                        <img src={ Icon4 } alt="" />
                        <p>Vždy volíme osobní přístupp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}