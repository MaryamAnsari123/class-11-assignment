import CarParent from "./Components/CarParent";
import Footer from "./Components/Footer";

export default function Home(){
  return(
    <div>
    <div className="justify-items-center mt-10 bg-blue-200
    px-2 py-2 md:px-12 md:py-10 lg:px-28 lg:py-20">
      <fieldset className="border-2 px-4 py-4 lg:px-8 lg:py-8 border-gray-500">
      <legend className="text-center text-gray-700 text-2xl font-bold md:p-3">
      <h1 className="text-blue-800 lg:text-bold md:text-2xl p-2
      text-base">Home Work done By using Props and Map Method</h1>
      </legend>
    <CarParent />
    </fieldset>
    </div>
    <Footer />
    </div>
  )
}