import { Link } from 'react-router'
import doctor from '../assets/doctor.png'
export default function Content() {
    return (
        <>
        <div className='bg-gray-100 pt-5'>
            <div className="flex flex-col  gap-6 md:flex-row mx-10 md:mx-40 md:items-center md:justify-center">
                <div className=' md:w-2/3 text-start order-2 text-md md:order-1'>
                    <p >Connecting You to Care That Matters
                        Accessing health services shouldn’t be hard. Whether you're looking for nearby clinics, mental health support, or tips for better living, our hub brings it all to one place — fast, simple, and reliable.</p>

                    <p className='ml-5'>
                        <p className='font-bold mt-5  mb-2'> Why This Matters</p>
                        <ul className='list-disc text-sm'>
                            <li>Save time with a centralized health directory</li>
                            <li>Get support for chronic conditions and mental well-being</li>
                            <li>Learn wellness habits that improve your daily life

                            </li>
                        </ul>
                    </p>
                </div>
                <img className=' order-1 mx-auto md:order-2 w-[250px] md:w-[300px]' src={doctor} alt="" />
            </div>

            <div className=" flex flex-wrap pb-10 justify-center gap-4 text-center mt-12">
               <div className=' rounded-xl w-[300px] bg-white shadow-sm '>
                    <p className='text-blue-600 text-xl font-bold'>Clinics</p>
                    <p className=' p-3'>Locate clinics with sliding scale fees, insurance options, and free services in your neighborhood.
                    </p>
                    <p className='text-blue-600 underline'> <Link to='/clinics'> Browse Clinics </Link></p>
               </div>

               <div className=' rounded-xl w-[300px] bg-white shadow-sm '>
                    <p className='text-blue-600 text-xl font-bold'>Mental Health Service</p>
                    <p className='p-3'>Connect with counselors, support groups, and crisis services
                        for emotional wellbeing
                    </p>
                    <p className='text-blue-600 underline'>Explore services</p>
               </div>

               <div className=' rounded-xl w-[300px] bg-white shadow-sm '>
                    <p className='text-blue-600 text-xl font-bold'>Manage Chronic Conditions</p>
                    <p className='p-3'>Find specialized support groups and resources for ongoing health management.
                    </p>
                    <p className='text-blue-600 underline'>Find Support </p>
               </div>

               <div className=' rounded-xl w-[300px] bg-white shadow-sm '>
                    <p className='text-blue-600 text-xl font-bold'>Live Counseling with Doctors</p>
                    <p className='p-3'>Connect instantly with certified doctors for real-time advice, health guidance, and support — anytime, from anywhere.
                    </p>
                    <p className='text-blue-600 underline'> <Link to='/live'>Connect</Link></p>
               </div>

               <div className=' rounded-xl w-[300px] bg-white shadow-sm '>
                    <p className='text-blue-600 text-xl font-bold'>Book an Appointment</p>
                    <p className='p-3'>Connect instantly with certified doctors for real-time advice, health guidance, and support — anytime, from anywhere.
                    </p>
                    <p className='text-blue-600 hover:underline underline'> <Link to='/doctor'> Book </Link></p>
               </div>


            </div>
            </div>

        </>
    )
}