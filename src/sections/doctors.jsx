import { useState } from 'react';
import doctor1 from '../assets/customer1.png'
import doctorData  from './data'

// Doctor Specialists
export const doctorSpecialists = [
    
    { id: 1, category: "Cardiologist" },
    { id: 2, category: "Dermatologist" },
    { id: 3, category: "Neurologist" },
    { id: 4, category: "Psychiatrist" },
    { id: 5, category: "Pediatrician" },
    { id: 6, category: "Orthopedic Surgeon" },
    { id: 7, category: "Gastroenterologist" },
    { id: 8, category: "Pediatrician" },
    { id: 9, category: "Gynecologist" },
    { id: 10, category: "Endocrinologist" },
   
    
];


const doctors = doctorData;

export default function Doctor() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const filtereddoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) &&  doctor.specialist.toLowerCase().includes(category.toLowerCase())


    );


    return (<>
        <div>

            <div className="flex flex-col md:flex-row md:items-end justify-center gap-4 text-center">
                <input className="w-2/3 mx-auto md:mx-0 md:w-[400px] px-4 h-10 border  border-blue-500" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Doctors" />
                <div className="flex flex-col">
                    <p>Category</p>
                    <select
                        className="border w-[180px] mx-auto p-2 border-gray-200 rounded"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                          
                        name="category"
                    >
                        <option value="">All</option>
                        {doctorSpecialists.map((data, index) => (
                            <option key={index} value={data.category}>
                                {data.category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            <div>

                <div className=" flex mt-6 gap-1 md:gap-4 flex-wrap justify-center">
                    {filtereddoctors.map((doc, index) => (
                        <div key={index} className="bg-white w-[240px] md:w-[300px] rounded-2xl shadow-lg p-5  hover:shadow-xl transition">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={doc.photo || "https://via.placeholder.com/80"} // fallback photo
                                    alt={doc.name}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
                                />
                                <div>
                                    <p className="text-xl font-semibold text-green-700">{doc.name}</p>
                                    <p className="text-sm text-gray-600">{doc.specialist}</p>
                                </div>
                            </div>

                            <div className="text-sm text-gray-700 space-y-1">
                                <p><strong>Hospital:</strong> {doc.hospital}</p>
                                <p><strong>Phone:</strong> {doc.phone}</p>
                                <p><strong>Online Hours:</strong> {doc.onlineHours}</p>
                                <p><strong>Hospital Hours:</strong> {doc.hospitalHours}</p>
                                <p><strong>Weekend:</strong> {doc.weekendAvailability}</p>
                                <p><strong>Emergency:</strong> {doc.emergencyAvailable ? "✅ Available" : "❌ Not Available"}</p>

                            </div>
                            <p className='mt-3'><strong className='bg-green-600 text-sm cursor-pointer  hover:bg-green-700 transition-colors text-white p-1 rounded-sm'>Book an appointment</strong></p>
                        </div>
                    ))}
                </div>


            </div>



        </div>

    </>
    )
}