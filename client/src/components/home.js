import './home.css'
import one from "../images/one.svg"
import two from "../images/two.svg"
import three from "../images/three.svg"


function Home() {

    let about = [
        {
            service: "wash & fold",
            image: one
        },
        {
            service: "self service laundry",
            image: two
        },
        {
            service: "commercial laundry service",
            image: three
        }
    ]




    return (
        <div>
            <div className="home">
                <div className="services">
                    <div className="info">
                        <div className="jumbo">ONE STOP LAUNDRY SERVICES</div>
                        <div className='hub'>South berkeleys residential and commerical laundry services hub.</div>
                        <div className="two-buttons">
                            <button className="left-button">Schedule</button>
                            <button className="right-button">Contact </button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='what-we-do'>
              <h2>Services</h2>
                <div className="we-provide">
                    {about.map((data,index) => (
                        <div className='business' key={index}>
                            <div>
                                <img src={data.image} height={70} width={70} fill="red"/>
                            </div>
                            <div className='wash-fold'>
                                {data.service}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
