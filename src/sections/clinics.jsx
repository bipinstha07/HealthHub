import { useState } from "react";

const clinics = [
  { name: "Medicare Health Center", location: "Monroe, LA 71203", contact: "3186908483", emergencyContact: "3183433000", serviceHour: "10 AM - 5 PM" },
  { name: "Riverfront Family Clinic", location: "Baton Rouge, LA 70808", contact: "2255550123", emergencyContact: "2255550456", serviceHour: "9 AM - 6 PM" },
  { name: "Lakeside Medical Center", location: "Metairie, LA 70002", contact: "5045550789", emergencyContact: "5045550987", serviceHour: "8 AM - 4 PM" },
  { name: "Crescent City Care", location: "New Orleans, LA 70112", contact: "5045550678", emergencyContact: "5045550543", serviceHour: "11 AM - 7 PM" },
  { name: "Pelican Health Group", location: "Shreveport, LA 71101", contact: "3185550345", emergencyContact: "3185550122", serviceHour: "7 AM - 3 PM" },
  { name: "Bayou Wellness Center", location: "Lafayette, LA 70501", contact: "3375550788", emergencyContact: "3375550666", serviceHour: "9 AM - 5 PM" },
  { name: "Northshore Medical Clinic", location: "Slidell, LA 70458", contact: "9855550222", emergencyContact: "9855550444", serviceHour: "10 AM - 6 PM" },
  { name: "Capital Health Clinic", location: "Zachary, LA 70791", contact: "2255550677", emergencyContact: "2255550888", serviceHour: "8 AM - 4 PM" },
  { name: "Acadian Family Medical", location: "Houma, LA 70360", contact: "9855550999", emergencyContact: "9855550777", serviceHour: "9 AM - 6 PM" },
  { name: "Sunrise Community Clinic", location: "Lake Charles, LA 70601", contact: "3375550555", emergencyContact: "3375550333", serviceHour: "7 AM - 2 PM" }
];

function Clinics() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClinics = clinics.filter((clinic) =>
    clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clinic.location.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
    <div className="text-3xl font-bold text-blue-500 text-center">
        Search the Clinics or Hospital as you need
    </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto mt-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => (setSearchTerm(e.target.value))}
            className="w-full p-3 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Search Clinics"
          />
        
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-5 flex gap-5 flex-wrap justify-center">
        {filteredClinics.map((data, index) => (
          <div key={index} className="border rounded-2xl shadow-md w-[350px] p-5 text-center hover:shadow-lg transition">
            <p className="text-2xl font-bold mb-3 text-green-600">{data.name}</p>
            <p className="text-gray-700 mb-1">Service Hour: <span className="font-semibold">{data.serviceHour}</span></p>
            <p className="text-gray-700 mb-1">{data.location}</p>
            <p className="text-gray-700 mb-1">Contact: <span className="font-medium">{data.contact}</span></p>
            <p className="text-gray-700">Emergency: <span className="font-medium">{data.emergencyContact}</span></p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Clinics;
