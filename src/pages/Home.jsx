import '../css/Home.css'
import Icon1 from "../assets/icons/i1.svg"
import Icon2 from "../assets/icons/i2.svg"
import Icon3 from "../assets/icons/i3.svg"
import Icon4 from "../assets/icons/i4.svg"

export function Home() {
    return (
        <section className="home">
            <div className="inner">
                <div className="context">
                    <h3>Vítejte na stránkách, kde se z vaší akce stane úžasný zážitek!</h3>
                    <h4>Naše společnost se specializuje na catering pro různé typy událostí, od malých soukromých oslav až po velké firemní akce.</h4>
                </div>
                <div className="icon-section">
                    <div className="icon-card">
                        <img src={Icon1} alt="30 let zkušeností" />
                        <p>Máme přes 30 let zkušeností</p>
                    </div>
                    <div className="icon-card">
                        <img src={Icon2} alt="Dlouhodobá spolupráce" />
                        <p>Zakládáme si na dlouhodobé spolupráci</p>
                    </div>
                    <div className="icon-card">
                        <img src={Icon3} alt="Dodržování termínů" />
                        <p>Vždy držíme termíny a sjednané dohody</p>
                    </div>
                    <div className="icon-card">
                        <img src={Icon4} alt="Osobní přístup" />
                        <p>Vždy volíme osobní přístup</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
