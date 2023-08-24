import "./style/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIdProduct } from "../../server";
import { useParams } from "react-router-dom";
import { selectPrductAction } from "../../Redux/Products/productSlice";
import { Rating } from "../../ui";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProductDetail = () => {
  const selectProduct = useSelector((state: any) => state.productSlice.select);
  const selectProductEmpty = Object.keys(selectProduct);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (selectProductEmpty) {

      getIdProduct(params?.productId).then((res) => {
        if (res.app_code === "GETING_DATA") {
          dispatch(selectPrductAction(res?.data));
        }
      });
    }
  }, [dispatch, params?.productId, selectProductEmpty]);

  const data = selectProduct?.images?.map((image:any, index:number) => ({
    image,
    caption: `Image ${index + 1}`
  }));
const characteristicsProduct =selectProduct?.detaleObject
  // console.log(characteristicsProduct)
  return (
    <div className="batman-store__product--wallpaper">
      <div className="batman-store__product">
        <div className="batman-store__product--image">
          {/*<img src={selectProduct?.images?.[0]} alt="" />*/}
          {/*<CarouselComponent images={selectProduct?.images} />*/}

          {data && data.length > 0 ? (
            <Carousel width={"100%"} useKeyboardArrows={true} centerSlidePercentage={100} infiniteLoop={true} axis='horizontal' centerMode={true} interval={10000} autoPlay={true}>
              {data.map((item:any, i:number) => (
                <div key={i}>
                  <img src={item.image} alt={`Product ${i}`} />
                </div>
              ))}
            </Carousel>
          ) : null}

        </div>

        <div className="batman-store__product--info">
          {selectProduct?.title ? <h1>{selectProduct?.title}</h1> : null}
          {selectProduct?.rating ? (
            <p>
              Reating: <Rating value={selectProduct?.rating} />
            </p>
          ) : null}
          {selectProduct?.price ? (
            <>
              <p>
                {(typeof selectProduct?.price === "string" ? selectProduct?.price : selectProduct?.price?.[0]?.value) ?? "No Price"}{" "}  {selectProduct?.price[0]?.currency ?  selectProduct?.price?.[0]?.currency : "No Currency"}
                {selectProduct?.discount? <span>
                  -{selectProduct?.discount?.value}
                  {selectProduct?.discount?.type}
                </span>:null}
              </p>{" "}
            </>
          ) : null}

          <div className='batman-store__product--info-more--detale'>
            {characteristicsProduct?.brand ? <div className='batman-store__product--info-more--detale__row'><h1>Brand:</h1><p>{characteristicsProduct?.brand}</p></div>:null}
            {characteristicsProduct?.model ? <div className='batman-store__product--info-more--detale__row'><h1>Model:</h1><p>{characteristicsProduct?.model}</p></div>:null}
            {characteristicsProduct?.condition ? <div className='batman-store__product--info-more--detale__row'><h1>Condition:</h1><p>{characteristicsProduct?.condition}</p></div>:null}
            {characteristicsProduct?.design ?<div className='batman-store__product--info-more--detale__row'> <h1>Design:</h1><p>{characteristicsProduct?.design} </p></div>:null}
            {characteristicsProduct?.sistem_de_operare ? <div className='batman-store__product--info-more--detale__row'> <h1>Design:</h1><p>{characteristicsProduct?.sistem_de_operare} </p></div>:null}
            {characteristicsProduct?.marca ?<div className='batman-store__product--info-more--detale__row'> <h1>Marca:</h1><p>{characteristicsProduct?.marca} </p></div>:null}
            {characteristicsProduct?.model ?<div className='batman-store__product--info-more--detale__row'> <h1>Model:</h1><p>{characteristicsProduct?.model} </p></div>:null}
            {characteristicsProduct?.memorie_ram ?<div className='batman-store__product--info-more--detale__row'> <h1>RAM:</h1><p>{characteristicsProduct?.memorie_ram} </p></div>:null}
            {characteristicsProduct?.tip_display ?<div className='batman-store__product--info-more--detale__row'> <h1>Type display:</h1><p>{characteristicsProduct?.tip_display} </p></div>:null}
            {characteristicsProduct?.memorie_încorporată ?<div className='batman-store__product--info-more--detale__row'> <h1>Built-in memory:</h1><p>{characteristicsProduct?.memorie_încorporată} </p></div>:null}
            {characteristicsProduct?.diagonala_display ?<div className='batman-store__product--info-more--detale__row'> <h1>diagonala_display:</h1><p>{characteristicsProduct?.diagonala_display} </p></div>:null}
            {characteristicsProduct?.color ?<div className='batman-store__product--info-more--detale__row'> <h1>Color:</h1><p>{characteristicsProduct?.color} </p></div>:null}
            {characteristicsProduct?.drivetrain ?<div className='batman-store__product--info-more--detale__row'> <h1>Drive train:</h1><p>{characteristicsProduct?.drivetrain} </p></div>:null}
            {characteristicsProduct?.fuel_type ?<div className='batman-store__product--info-more--detale__row'> <h1>Fuel type:</h1><p>{characteristicsProduct?.fuel_type} </p></div>:null}
            {characteristicsProduct?.manufacturing_year ?<div className='batman-store__product--info-more--detale__row'> <h1>Manufacturing year:</h1><p>{characteristicsProduct?.manufacturing_year} </p></div>:null}
            {characteristicsProduct?.power ?<div className='batman-store__product--info-more--detale__row'> <h1>Power(h/p):</h1><p>{characteristicsProduct?.power} </p></div>:null}
            {characteristicsProduct?.registration ?<div className='batman-store__product--info-more--detale__row'> <h1>Registration:</h1><p>{characteristicsProduct?.registration} </p></div>:null}
            {characteristicsProduct?.seats_number ?<div className='batman-store__product--info-more--detale__row'> <h1>Seats number:</h1><p>{characteristicsProduct?.seats_number} </p></div>:null}
            {characteristicsProduct?.steering_wheel ?<div className='batman-store__product--info-more--detale__row'> <h1>Steering wheel:</h1><p>{characteristicsProduct?.steering_wheel} </p></div>:null}
            {characteristicsProduct?.transmission ?<div className='batman-store__product--info-more--detale__row'> <h1>Transmission:</h1><p>{characteristicsProduct?.transmission} </p></div>:null}
            {/*{characteristicsProduct?.haracterwerewre ?<div className='batman-store__product--info-more--detale__row'> <h1>haracterwerewre:</h1><p>{characteristicsProduct?.haracterwerewre} </p></div>:null}*/}
            {/*{characteristicsProduct?.haracterwerewre ?<div className='batman-store__product--info-more--detale__row'> <h1>haracterwerewre:</h1><p>{characteristicsProduct?.haracterwerewre} </p></div>:null}*/}
            {/*{characteristicsProduct?.haracterwerewre ?<div className='batman-store__product--info-more--detale__row'> <h1>haracterwerewre:</h1><p>{characteristicsProduct?.haracterwerewre} </p></div>:null}*/}
            {/*{characteristicsProduct?.haracterwerewre ?<div className='batman-store__product--info-more--detale__row'> <h1>haracterwerewre:</h1><p>{characteristicsProduct?.haracterwerewre} </p></div>:null}*/}
            {/*{characteristicsProduct?.haracterwerewre ?<div className='batman-store__product--info-more--detale__row'> <h1>haracterwerewre:</h1><p>{characteristicsProduct?.haracterwerewre} </p></div>:null}*/}
            {/*{characteristicsProduct?.haracterwerewre ?<div className='batman-store__product--info-more--detale__row'> <h1>haracterwerewre:</h1><p>{characteristicsProduct?.haracterwerewre} </p></div>:null}*/}


          </div>

          {selectProduct?.description ? (
            <div className="batman-store__product--info-data">
              <h4>{selectProduct?.description}</h4>{" "}
            </div>
          ) : null}

          <div className='batman-store__product--info-more batman-store__product--info--location'>
            {selectProduct?.regionObj ? <p>{selectProduct?.regionObj?.country} <span>{selectProduct?.regionObj?.city}</span></p>:null}
          </div>
          <div className='batman-store__product--info-more batman-store__product--info--number-phone'>
            {selectProduct?.phoneNumber ? <p>{selectProduct?.phoneNumber} <span>{selectProduct?.phoneNumber}</span></p>:null}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProductDetail;
