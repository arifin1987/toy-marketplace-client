import car1 from '../../../../public/image/toy1.avif'
import car2 from '../../../../public/image/toy2.avif'
import car3 from '../../../../public/image/toy3.avif'
import car4 from '../../../../public/image/toy4.avif'


const Banner = () => {
    return (
        <div className="h-96 carousel carousel-vertical rounded-box bg-green-200 ">
            <div className="carousel-item h-full w-full mx-auto">
                <img className='mx-auto' src={car1} />
            </div>
            <div className="carousel-item h-full ">
                <img className='mx-auto' src={car2} />
            </div>
            <div className="carousel-item h-full">
                <img className='mx-auto' src={car3} />
            </div>
            <div className="carousel-item h-full">
                <img className='mx-auto' src={car4} />
            </div>
            
        </div>
    );
};

export default Banner;