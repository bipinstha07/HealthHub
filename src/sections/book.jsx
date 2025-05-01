import { useState } from "react";
import { useLocation } from "react-router";

function generateTimeSlots(start, end) {
    const slots = [];
    console.log(start)
    console.log(end)

    if(start>end){
        for (let hour = start; hour <= 24; hour++) {
            slots.push(`${hour}:00`);
        
          }

          for(let hour= 1; hour<=end; hour++ ){
            slots.push(`${hour}:00`)
          }


    }

    else{
        for (let hour = start; hour <= end; hour++) {
            slots.push(`${hour}:00`);
            if (hour !== end) {
              slots.push(`${hour}:30`);
            }
          }
    }

   
    return slots;
  }
  

function Book() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const name = query.get("name");
    const specialist = query.get("specialist");
    const onlineHours = query.get("onlineHours");
    const separate = onlineHours.split(',');
    const timeRange = separate[1].split('-');
    const timeStart = timeRange[0].trim(); // "11 PM"
    const timeEnd = timeRange[1].trim();   // "2 AM"

    // Parse start time
    const [startHour, startPeriod] = timeStart.split(" ");
    let exactTimeF = parseInt(startHour);
    if (startPeriod === "PM" && exactTimeF < 12) exactTimeF += 12;
    if (startPeriod === "AM" && exactTimeF === 12) exactTimeF = 0;

    // Parse end time
    const [endHour, endPeriod] = timeEnd.split(" ");
    let exactTimeF2 = parseInt(endHour);
    if (endPeriod === "PM" && exactTimeF2 < 12) exactTimeF2 += 12;
    if (endPeriod === "AM" && exactTimeF2 === 12) exactTimeF2 = 0;


    const [selectedTime, setSelectedTime] = useState("");

    const timeSlots = generateTimeSlots(exactTimeF, exactTimeF2); // from 8:00 to 18:30

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold">{name}</h2>
            <p>{specialist}</p>
            <p>{onlineHours}</p>

            <div>
                <label className="block mb-2 font-medium">Select Time:</label>
                <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                >
                    <option value="">-- Choose a time --</option>
                    {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-blue-100 text-blue-800 text-2xl font-bold text-center py-4 rounded-lg shadow-md mb-6">
                Book an Appointment
            </div>

        </div>
    );
}

export default Book;
