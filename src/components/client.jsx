import customer1 from '../assets/customer1.png'
import customer2 from '../assets/customer2.jpg'
import customer3 from '../assets/customer3.jpg'
import customer4 from '../assets/customer4.jpg'
import customer5 from '../assets/customer5.jpg'

const reviews = [
    { name: "Bipin Shrestha", age: 23, comment: "Great service, very helpful staff. I was able to find the right clinic quickly and book an appointment without any hassle.", photo: customer1 },
    { name: "Anita Sharma", age: 34, comment: "Doctor was kind and professional. The whole experience made me feel cared for and supported throughout my consultation.", photo: customer2 },
    { name: "Ravi Koirala", age: 41, comment: "Quick appointment process and very clean environment. Everything was well-organized and easy to understand.", photo: customer3 },
    { name: "Sita Lama", age: 29, comment: "The counselor helped me manage stress in ways I never thought possible. I feel more in control of my mental health now.", photo: customer4},
    { name: "Manoj Thapa", age: 37, comment: "This site gave me access to mental health services I didn’t know existed. A great initiative for the community!", photo: customer5},
  
];


export default function Client() {
    return (
        <>
<div className='bg-gray-100'>
            <p className='text-center text-2xl font-bold pt-5 pb-10'>
                What our Clients Says
            </p>

            <div className='flex justify-center flex-wrap gap-5'>
                {reviews.map((data, index) => (
                    <>
                        <div className=" text-center p-5  bg-gray-100 relative h-[250px] w-[300px]">
                            <img className="rounded-full h-20 mx-auto w-20 object-fill " src={data.photo} alt="" />
                            <p className='mt-2'>{data.comment}</p>
                            <p className='mt-2 absolute bottom-0 right-[30%] text-orange-500 mb-2 font-bold'>{data.name}</p>
                        </div>
                    </>
                ))}
            </div>

            </div>
        </>
    )
}