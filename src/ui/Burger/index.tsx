import './index.css'
const BurgerMenu =({open, onClick}:any)=>{
return(

    <label className="burger" htmlFor="burger">
      <input type="checkbox" onChange={onClick}  checked={open} id="burger"/>
        <span></span>
        <span></span>
        <span></span>
    </label>
)
}

export default BurgerMenu