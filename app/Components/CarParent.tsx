import React from 'react'
import CarChild from './CarChild'

const CarParent = () => {
  const ProDetail = [
    {carName: "Toyota Corolla" , carPrice : "59.7-75.5" , carReview : 644 , 
    Picture : "/img/c1.jpg"},

    {carName: "Suzuki Alto" , carPrice : "23.3-30.5" , carReview : 242 , 
      Picture : "/img/c2.png"},

      {carName: "Honda City" , carPrice : "46.5-58.5" , carReview : 644 , 
        Picture : "/img/c3.jpg"},

        {carName: "Honda Civic" , carPrice : "86.6-99.0" , carReview : 422 , 
          Picture : "/img/c4.jpg"},       
  ]
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap 
    justify-center items-center gap-6'>
        {
          ProDetail.map((detail , data) => {
            return (
            <CarChild key={data} name={detail.carName} price={detail.carPrice}
            Reviews={detail.carReview} image={detail.Picture} />
            )
          })
        }
      
    </div>
  )
}

export default CarParent
