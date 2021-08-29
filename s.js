let products=[
     {
     name:"shirt",
     size:"M",
     image:"pr.jpg",
     color:"pink",
     price:"800",
     description:"good looking formal shirt"
     },
    /*{
     name:"shirt",
     size:"L",
     image="product1.jpg",
     color:"white and brown checks",
     price:"800",
     description:"good looking casual shirt"
},*/
{
     name:"Tshirt",
     size:"s",
     image:"product2.jpg",
     color:"blue and white",
     price:"550",
     description:"stylish T-shirt"
},{
     name:"dress",
     image:"p8.webp",
     color:"Grey",
     price:"1200",
     size:"M",
     description:"classic indian style",
},
{
     name:"Tshirt",
     size:"M",
     image:"product5.webp",
     color:"white",
     price:"400",
     description:"casual fit T-shirt"
},
{    name:"white shirt",
     size:"M and L",
     price:"800",
     image:"p6.jpg",
     color:"white",
     description:"formal fit shirt"

},



{
     name:"Tshirt",
     size:"M",
     color:"black",
     image:"product3.jpg",
     price:"450",
     description:"good looking formal T-shirt"
},
{
     name:"Tshirt",
     size:"M",
     color:"blue",
     image:"product6.png",
     price:"450",
     description:"classic  round neck T-shirt"     
     
}
];

cart=[]

function displayproducts(productsdata,who="productwrapper1")
{
     let productsstring= "";
     
     productsdata.forEach(function(product,index)
     // let {name,size,color,price,description}=product;
     {    
          if (who=="productwrapper1")
          {
               productsstring += `<div class="product">
               <div class="prodimg">
                    <img src="${product.image}" width="100%"  alt="">
                   </div>     
               <h3>${product.name}</h3>
               <p>price: ${product.price}</p>
               <p>size: ${product.size}</p>
               <p>color: ${product.color}</p>
               <p>${product.description}</p>
               <p>
                <button onclick="addtocart(${index})">Add to Cart</button>
               </p>
     
               </div> `  
          }
          else if(who=="cart")
          {
          
          productsstring += `<div class="product">
          <div class="prodimg">
          <img src="${product.image}" width="100%"  alt="">
          </div>     
          <h3>${product.name}</h3>
          <p>price: ${product.price}</p>
          <p>size: ${product.size}</p>
          <p>color: ${product.color}</p>
          <p>${product.description}</p>
          <p>
          <button onclick="removefromcart(${index})">Remove from Cart</button>
          </p>
          
          </div> ` 
          }
     }
     );
document.getElementById(who).innerHTML=productsstring;
     }
displayproducts(products);

function searchProduct(searchvalue){
     // let searchvalue= document.getElementById('searchvalue').value;
     // console.log(searchvalue)
     let searchproduct=products.filter(function (product){
          let searchstring = product.name + " " +product.color;
          return searchstring.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1;
     })
     displayproducts(searchproduct)
}
 

function addtocart(index){
    cart.push(products[index])
    console.log(cart)
    displayproducts(cart,"cart")
}
function removefromcart(index){
     cart.splice(index,1)
     displayproducts(cart, "cart")
 }
 function purchase(){
     x1=(confirm("Confime your order."))
     if (x1="true"){
          let sum=0
          if (length.cart!=0)
               {  cart.forEach(function(element){
                    sum+=parseInt(element.price)
               })
                    alert(`Total price of order is ${sum}`)
                    // console.log(sum)
               }
          
     }

     console.log(x1 )
}