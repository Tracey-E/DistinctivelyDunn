
import React,{Fragment} from "react"

import BagForm from "../forms/bagform"
import ImageViewer from "../images/designImages/dImages"


const BagPage = () => {
   
return (
    <Fragment>
       
        <div id="BagPage">
            <h1>Cotton tote bags</h1>
            <p>  All designs that you see on the bags are able to be used on my clothing range.         
               <br/> Cotton tote bags are just £5 each excluding postage.
               <br/> Made from 100% cotton (140gsm) with 10 litre capacity. Bag size (excluding handles) 38 x 42cm.
               <br/> We recommend that bags are wipe clean rather than machine wash. 
            </p>
         <BagForm/>
         <p className="gallery">GALLERY</p>
        <ImageViewer/>
    
        </div>
      
    </Fragment>
)
}

export default BagPage