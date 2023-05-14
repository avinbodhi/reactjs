import { NetflixHeader } from "./netflix-header"
import { Netflixmain } from "./netflix-main"
import "./netflix-index.css";

export function NetflixIndex(){
    return (
        <div className="netflix-body">
            <div className="netflix-shade">
                <header>
                    <NetflixHeader/>
                </header>
                <section>
                    <Netflixmain />
                </section>
            </div>
        </div>
    )
}