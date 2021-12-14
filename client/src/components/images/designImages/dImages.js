import React  from "react"
import { Img01,Img02,Img03,Img04,Img05,Img06,Img07,Img08,Img09,Img10,Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21,Img22,Img23,Img24,Img25,Img26,Img27  }  from "./designImages"




const DesignImages =  [
    Img01,Img02,Img03,Img04,Img05,Img06,Img07,Img08,Img09,Img10,Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21,Img22,Img23,Img24,Img25,Img26,Img27
]
  


const ImageViewer =() =>  {
    var id=0
    const imag = DesignImages.map((image) =>{
     var ids = id++
      return <img  src={image} alt ={image}  key={ids} />
     });
    return<div className="imgView">{imag}</div>  
    }

export default ImageViewer