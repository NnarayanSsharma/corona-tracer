import React from 'react'
import CountUp from 'react-countup'


// const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
const Cards = (props) => {

    const { confirmed, recovered, deaths, lastUpdate } = props.data
    if(!confirmed){
        // return 'Loading...'
        return (<div class="loader"></div>)
    }
    // console.log(props)
    return (
        <div className="cards">
            <div className="infected">
                <p className="number">
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={3.0}
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
                        duration={3.0}
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
                        duration={3.0}
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
