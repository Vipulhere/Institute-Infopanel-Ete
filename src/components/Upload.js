import React from "react";
import { useState } from "react";
import { Button, Image as Img } from "react-bootstrap";
import "./upload.css"
import { AiFillDelete,AiFillFileAdd} from "react-icons/ai";
import { InputGroup } from "react-bootstrap";


function Upload(){

    let imageObj = [];
    const [eventPr, seteventPr] = useState(3);

    function change(v){
        let a = eventPr;
        seteventPr(++a);
    }

    function deleteEntry(idx){
        change(1);
        console.log("qweqweqwe",idx);
        localStorage.removeItem(""+(idx));
    }

    function imagediv(obj,k,lcK,content=null){
        return(
            <div key={k} className="image-div">
                <div heading="Image div" showdiv={false} showHeading={false} showBr={false}>
                    <div className="image-holder">
                    <div className="direct-image-holder"><Img src={obj} fluid={true} /></div>
                        <div className="caption-holder">
                            <span className="caption-style">
                            {(content==null) ?  k : content}
                            </span>
                            <Button variant="primary" onClick={()=>{
                                deleteEntry(lcK);
                            }}><AiFillDelete size={20}/></Button>
                        </div>
                       

                    </div>
                </div>
            </div>
        );
    }
    function uploadImg(){
        
        let img = document.getElementById("ig");
        if(img.src !== ""){
            change(2);
            let imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

        // Make sure canvas is as big as the picture
        imgCanvas.width = img.width;
        imgCanvas.height = img.height;

        // // Draw image into canvas element
        imgContext.drawImage(img, 0, 0, img.width, img.height);

        // Get canvas contents as a data URL
        var imgAsDataURL = imgCanvas.toDataURL("image/png");
        localStorage.setItem(""+(localStorage.length+1), imgAsDataURL);

        img.src="";img.classList.toggle("img-h-v");}
        else{
            alert("select image");
        }
    }

    return(
        <div>
            <div heading="Upload New Content" showdiv={false} showHeading={true} showBr={true}>
                

                <div heading="Upload New Content" showdiv={false} showHeading={false} showBr={false}>
                    <label htmlFor="pic-upload" className="upload-label-holder">
                        <AiFillFileAdd size={40} />
                        <input id="pic-upload" name="pic-upload" type={"file"} onChange={(e)=>{
                            let img = document.getElementById("ig");
                            img.classList.toggle("img-h-v");
                            img.src = URL.createObjectURL(document.getElementById("pic-upload").files[0]);
                            // setImgEle(img);
                        }}></input>
                    </label>
                    
                    <div className="upload-button-holder">
                    <Button variant="primary" onClick={uploadImg}>Upload Image</Button>
                </div>
                <div id="disp-img" className="upload-button-hold">
                        <img className="img-h-v" src="" id="ig" alt="images" />
                    </div>
                </div>
                
                <div heading="Upload New Content" showdiv={false} showHeading={false} showBr={false}>
                    <div className="new-img-upload">
                        {eventPr > 0 &&
                            // localStorage
                            Object.keys(localStorage).map((obj,idx)=>{
                                console.log(obj);
                                return (imagediv(localStorage.getItem(obj),idx,obj));
                            })
                        }
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Upload;