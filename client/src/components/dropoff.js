import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dropoff.css'
import { useNavigate } from "react-router-dom";

function Dropoff() {
    const navigate = useNavigate();
    const [data, setApp] = useState([]);
    const [clock, setClock] = useState('')
    const [day, setDay] = useState('')
    const [name, setName] = useState('');

    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
          const response = await fetch('https://wash-house.azurewebsites.net');
          const result = await response.json();
          setApp(result);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };

    let done = []

    data.map((tyme, i) => {
        done.push(tyme.day + tyme.clock)
    })

    let week = []  

    for(var i = 0; i < 7; i++) {
      var today = new Date();
      today.setDate(today.getDate() + i)
      week.push(today.getDay())
    }

    let zones = []

    function Schedule(day, requests = []) {
      this.day = day;
      this.requests = requests;
    }
  
    for(let i=0;i < 7; i++) {
        const ap = new Schedule(
          week[i],
          [ { time: "8:00 AM", disabled: false },
            { time: "10:00 AM", disabled: false },
            { time: "11:00 AM", disabled: false },
            { time: "12:00 PM", disabled: false },
          ]
        );
        zones.push(ap)
    }

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    zones.map((use,index) => {
        { use.requests.map((arr,i) => {
           let n = use.day.toString()
           let numbers = n + arr.time
          done.includes(numbers) ? arr.disabled = true : arr.disabled = false
           if (use.day === 0) {
           arr.disabled = true
          }
        })}
    })

    function buettonclick(e) {
        let wkday = e.currentTarget.getAttribute("weekday"); 
        let requestedtime = e.currentTarget.getAttribute("thetime");
        setClock(requestedtime)
        setDay(wkday)
      }

    function handle(e) {
        setName(e.target.value)
    }

    function buttonKlick() {
        axios({
          method: 'post',
          url: 'https://wash-house.azurewebsites.net/add',
          data: {name, day, clock}
        }).then((response) => {
            if(response.status == 200) {
                navigate("/request")
            }
        })
    }

    return (
        <div className='new-appointment'>
          <div className="submit-form">
            <form onChange={handle}>
              <label> Enter Name:</label>
              <input type="name"  size="50"/>
            </form>
          {zones.map((data,index) => (
            <div className='rows' key={index}>
              <div className='the-day'>{weekday[data.day]}</div>
               {data.requests.map((req,index) => (
                 <div className='button-rows'key={index}>
                    <button className="the-buttons" 
                        disabled={req.disabled} 
                        weekday={data.day} 
                        thetime={req.time}
                        onClick={buettonclick}
                    >
                     {req.time}
                    </button>
                 </div>
               ))}
            </div>
          ))}
           <div onClick={buttonKlick} className='batton'>  
             <button className='send-button'>Send</button> 
           </div>
          </div>
        </div>
    )
}

export default Dropoff
