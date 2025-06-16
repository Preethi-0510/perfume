import React from "react";
var a={color:"white",textAlign:"center"}
var b={backgroundColor:"pink"}
function Cake(){
    return(
        <>
        <body style={b}>
        <h1 style={{textAlign:"center",color:"black"}}>The Ultimate Hazelnut Cake</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUox4Qs7T4TUJHWnzt9faJ9s2frPhnjSUErA&s" height="300px" width="400px" style={{display:"block",margin:"0 auto"}}></img>
        <h2 style={a}>Looking for the ultimate hazelnut cake? Look no further than our website, where we offer the most delicious and decadent hazelnut cake you'll ever taste! Our cake is made of a delectable hazelnut-almond sponge that's layered with rich hazelnut praline, smooth Nutella, and crunchy roasted hazelnuts. To top it off, we drizzle our cake with Belgian chocolate ganache and a hint of coffee, and finish it with a generous dollop of creamy dairy cream. And for the ultimate texture, we use almond flour and French biscuit to add that extra crunch and depth of flavor. If you're a hazelnut lover, you won't want to miss out on this ultimate hazelnut cake!</h2>
        </body>
        </>

    )
}
export default Cake;
