import React from 'react'
import CountUp from 'react-countup'


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loading...'
    }
    // console.log(props)
    return (
        <div className="cards">
            <div className="infected">
                <p className="number">
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2.0}
                        separator=","
                    />
                </p>
                <p className="date">{new Date(lastUpdate).toDateString()}</p>
                <p className="name">Confirmed</p>
            </div>
            <div className="recovered">
                <p className="number">
                    <CountUp
                        start={0}
                        end={recovered.value}
                        duration={2.0}
                        separator=","
                    />
                </p>
                <p className="date">{new Date(lastUpdate).toDateString()}</p>
                <p className="name">Recovered</p>
            </div>
            <div className="deaths">
                <p className="number">
                    <CountUp
                        start={0}
                        end={deaths.value}
                        duration={2.0}
                        separator=","
                    />
                </p>
                <p className="date">{new Date(lastUpdate).toDateString()}</p>
                <p className="name">Deaths</p>
            </div>
        </div>
    )
}

export default Cards
