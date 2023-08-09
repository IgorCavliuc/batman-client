import './style/index.scss'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIdProduct } from "../../server";
import { useParams } from "react-router-dom";
import { selectPrductAction } from "../../Redux/Products/productSlice";
import { Rating } from "../../ui";

const ProductDetail =()=>{
  const selectProduct = useSelector((state:any) => state.productSlice.select)
  const selectProductEmpty = Object.keys(selectProduct)

  const dispatch = useDispatch()

  const params = useParams()

  useEffect(() => {
    if(selectProductEmpty.length < 1){
      getIdProduct(params?.productId).then(res=>{
        if(res.app_code === "GETING_DATA"){
          dispatch(selectPrductAction(res?.data))
        }
      })
    }
  }, []);
  return(
    <div className='batman-store__product--wallpaper'>

      <div className='batman-store__product'>

        <div className='batman-store__product--image'>
          <img src={selectProduct?.images} alt="" />
        </div>


        <div className='batman-store__produc--info'>
          {selectProduct?.title ? <h1>{selectProduct?.title}</h1>:null}
          {selectProduct?.rating ? <p>Reating:  <Rating value={selectProduct?.rating}/>  {selectProduct?.rating}</p>:null}
          {selectProduct?.price ? <><p>Price {selectProduct?.price}MDL  <span>-{selectProduct?.discount?.value}{selectProduct?.discount?.type}</span></p> </>:null}
          <div className='batman-store__produc--info-more'>
            {selectProduct?.brand?<div className='batman-store__produc--info-data'><p>Brand:</p> <h4>{selectProduct?.brand}</h4> </div>:null}
            {selectProduct?.model?<div className='batman-store__produc--info-data'><p>Model:</p> <h4>{selectProduct?.model}</h4> </div>:null}
            {selectProduct?.description?<div className='batman-store__produc--info-data'><h4>{selectProduct?.description}</h4> </div>:null}
          </div>
        </div>



      </div>
    </div>
  )
}

export default ProductDetail