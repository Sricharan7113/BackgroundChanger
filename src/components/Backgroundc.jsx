import { hover } from "@testing-library/user-event/dist/hover";

function Change() {
    return (
        <div className="Background" id="Background">
            <p className="Discription" id="Discription">
                Background Changer
      
            </p>
            <button className="btn" id="btn" onClick={Changer}>Change</button>
        </div>
    )
}

function Changer() {
    var i = 0;
    //var Arr = ["Background1.jpg", "Background2.jpg", "Background3.jpg", "Background4.jpg", "Background5.jpg"];
    var Arr = ["RosyBrown","DarkSeaGreen","Tomato","Moccasin","Thistle","DodgerBlue","PaleVioletRed","PaleGoldenrod",]
    for (var element = 0; element < Arr.length; element++) {
       i = Math.floor(Math.random() * Arr.length)
   
    }
    console.log(Arr[i])
    document.getElementById("Background").style.backgroundColor=Arr[i];
    document.getElementById("Discription").innerHTML=Arr[i];
    

}


export default Change;
