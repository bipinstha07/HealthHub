import { useState } from "react";
import { Outlet } from "react-router";
import doctorData from './data'

const doctors = doctorData

function LiveDoctor() {
    const [search, setSearch] = useState("");
    // const liveDoctor = doctors.filter((data) => {
    //     const onlineHours = data.onlineHours;
    //     const separate = onlineHours.split(',');
    //     const day = separate[0].split('-')
    //     const time1 = separate[1].split('-');
    //     const timeStart = time1[0].trim()
    //     const timeEnd = time1[1].trim()

    //     const dayStart = day[0]
    //     const dayEnd = day[1];
    //     console.log("New Start of Data")
    //     console.log("Time start")
    //     const exactTime = timeStart.split(" ")
    //     let exactTimeF = exactTime[0] // start Time
    //     const amorpm1 = exactTime[1] // am or pm
    //     console.log("Time end")

    //     const exactTime2 = timeEnd.split(" ")
    //     let exactTimeF2 = exactTime2[0] // end Time
    //     const amorpm2 = exactTime2[1] // am or pm


    //     if (amorpm1 == "PM" && exactTimeF < 12) {
    //         console.log('convert')
    //         exactTimeF = parseInt(exactTimeF) + 12
    //     }

    //     if (amorpm2 == "PM" && exactTimeF2 < 12) {
    //         exactTimeF2 = parseInt(exactTimeF2) + 12

    //     }

    //     if(amorpm1=="AM" && exactTimeF==12){
    //         exactTimeF=0
    //     }
    //     if(amorpm2=="AM" && exactTimeF2==12){
    //         exactTimeF2=0;
    //     }

    //     console.log(exactTimeF)
    //     console.log(exactTimeF2)

    //     console.log(dayStart)
    //     console.log(dayEnd)



    //     // Getting local time
    //     const now = new Date();
    //     const time = now.toLocaleTimeString();
    //     const dtime = time.split(":")


    //     let timeStart1 = dtime[0]
    //     const amorpm = dtime[2].split(" ")[1];


    //     if (amorpm == "PM" && timeStart1 < 12) {
    //         timeStart1 = parseInt(timeStart1) + 12

    //     }
    //     if(timeStart1==12 && amorpm =="AM"){
    //         timeStart1 = 0;
    //     }

    //     let localTime = timeStart1
    //     console.log(` localTime- ${localTime}`)

    //     console.log(`Time Start ${exactTimeF} - time End ${exactTimeF2} : localTime ${localTime}`)
    //     console.log(exactTimeF <= localTime && exactTimeF2 >= localTime)

    //     if (exactTimeF > exactTimeF2) {
    //         // Overnight range, e.g., 11 PM (23) to 2 AM (2)
    //         return localTime >= exactTimeF || localTime <= exactTimeF2;
    //       } else {
    //         // Normal range, e.g., 2 PM (14) to 6 PM (18)
    //         return localTime >= exactTimeF && localTime <= exactTimeF2;
    //       }


    //     // return exactTimeF <= localTime && exactTimeF2 >= localTime




    // })

    const liveDoctor = doctors.filter((data) => {
        const onlineHours = data.onlineHours; // e.g., "Mon-Fri , 11 PM - 2 AM"
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

        // Get local time in 24hr
        const now = new Date();
        const localTime = now.getHours(); // already in 24-hour format

        // Debug logs
        console.log(`Time Start: ${exactTimeF}, Time End: ${exactTimeF2}, Local Time: ${localTime}`);

        // Time match logic
        if (exactTimeF > exactTimeF2) {
            return localTime > exactTimeF || localTime < exactTimeF2;
        } else {
            return localTime > exactTimeF && localTime < exactTimeF2;
        }
    });


    const filteredLiveDoctors = liveDoctor.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) || doctor.specialist.toLowerCase().includes(search.toLowerCase())


    );

    return (
        <>
            <div className="text-xl md:text-2xl font-semibold text-blue-600 text-center my-4">
                Connect to your lifeline
            </div>


            <div className="flex w-full ">
                {/* Left: Doctor Card */}
                <div className="w-full md:w-1/4 p-4">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder=" Search doctors by name or specialty"
                        className="w-full mb-10 max-w-md mx-auto block px-4 py-2 h-11 border border-gray-300 rounded-full shadow-sm focus:border-gray-100"
                    />
                    <div className="md:h-[540px] flex flex-col gap-5  w-screen md:w-auto overflow-auto">
                        {filteredLiveDoctors.map((a) => (
                            <div className="bg-white shadow-md rounded-lg p-3 text-sm space-y-1 w-full max-w-xs mx-auto sm:max-w-sm md:max-w-xs">
                                <h3 className="text-base font-semibold text-green-600">{a.name}</h3>
                                <p className="text-gray-700">{a.specialist}</p>
                                <p className="text-gray-500">{a.hospital}</p>
                                <p> {a.onlineHours}</p>
                                <p>📞 {a.phone}</p>
                                <button className="mt-1 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 w-full">
                                    Chat
                                </button>
                            </div>
                        ))}

                        {(!filteredLiveDoctors || filteredLiveDoctors.length === 0) && (
                            <p className="text-center text-gray-500">No doctors available</p>
                        )}
                    </div>



                </div>


                {/* Right: Chat Area Placeholder */}
                <div className=" md:w-3/4 md:p-4 border-l border-gray-200">
                    Chat features Coming Soon
                    <Outlet />
                </div>
            </div>





        </>
    )
}

export default LiveDoctor;