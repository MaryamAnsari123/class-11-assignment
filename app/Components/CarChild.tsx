import Image from "next/image"

const CarChild = (props:any) => {
  return (
    <div>
    <div className="flex flex-col justify-center border-2
     border-gray-800 items-center bg-blue-300 px-6 py-2
     lg:w-56 md:w-64 w-56 rounded-md h-72 shadow-2xl shadow-gray-500
     hover:shadow-xl hover:shadow-gray-900">
      
      <div className="w-48">
        <Image 
      src={props.image}
      alt="picture"
      width={200}
      height={150}/>
      </div>

      <h1 className="text-xl font-bold text-gray-800 mt-4">{props.name}</h1>
      <p className="text-green-700 text-sm font-medium mt-2">PKR {props.price} Lacs</p>
      <p className="text-sm font-mono">
      <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734; </span>{props.Reviews} Reviews</p>
    </div>
    </div>
  )
}

export default CarChild
