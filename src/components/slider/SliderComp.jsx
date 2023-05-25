import React from 'react';
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-5xl font-bold'>
              En Kaliteli Ayakkabılar Burada!
            </div>
            <p className='text-lg my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, similique qui. Molestias necessitatibus quod magni
              animi obcaecati maiores et architecto soluta a dignissimos
              repellendus ad reiciendis, cupiditate ducimus, quam eaque!
            </p>
            <div className='border rounded-full cursor-pointer text-3xl w-[200] h-16 flex items-center justify-center bg-gray-300'>
              İncele
            </div>
          </div>
          <img
            src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png'
            alt='Slider-image'
          />
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-5xl font-bold'>
              En Kaliteli Ayakkabılar Burada!
            </div>
            <p className='text-lg my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, similique qui. Molestias necessitatibus quod magni
              animi obcaecati maiores et architecto soluta a dignissimos
              repellendus ad reiciendis, cupiditate ducimus, quam eaque!
            </p>
            <div className='border rounded-full cursor-pointer text-3xl w-[200] h-16 flex items-center justify-center bg-gray-300'>
              İncele
            </div>
          </div>
          <img
            src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e6a85daa-1a77-45b9-a892-b4e72124060f/air-force-1-07-ayakkab%C4%B1s%C4%B1-xnQMZ1.png'
            alt='Slider-image'
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
