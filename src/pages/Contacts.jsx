import '../css/Contacts.css'

export function Contacts() {
    return (
        <>
        <div className="contacts">
            <div className="inner">
                <div className="contacts-card">
                    <p>tel.: 999 999 999</p>
                    <p>e-mail: nevim@gmail.com</p>
                </div>
                <div className="map">
                    <iframe
                        title="Mapy.cz"
                        src="https://mapy.com/s/demubapoto"
                        width="400px"
                        height="300"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        </>
    )
}
