// import React, { useEffect, useState } from 'react'

// export default function Pc() {
//     const [pname,setPname]=useState("");
//     const [pprice,setPprice]=useState("");
//     const [pdescription,setPdescription]=useState("");
//     const [submit,setSubmit]=useState(false);

//     useEffect(()=>{
//         if(submit && (pname || pprice || pdescription)){
//             setSubmit(false)
//         }

//     },[pname,pprice,pdescription,submit]);


//     function handlePname(e){
//         setPname(e.target.value);
//     }
//     function handlePprice(e){
//         setPprice(e.target.value);
//     }
//     function handlePdescription(e){
//         setPdescription(e.target.value);
//     }
//     function handleSubmit(e){
//        e.preventDefault();
//        console.log(`product name: ${pname}`);
//        console.log(`product price: ${pprice}`);
//        console.log(`product description: ${pdescription}`);
//        setSubmit(true);
//        clearAll();
//     }
//     function clearAll(){
//         setPdescription("");
//         setPprice("");
//         setPname("");
//     }
//     function msg(){
//         if(submit){
//             return(
//                 <div>
//                     <p>Product Added Successful..</p>
//                 </div>
//             )
//         }
//     }

//     return (
//     <div>
//         <div className='container'>
//             <form className='form' onSubmit={handleSubmit}>
//                 <h2>Product Catlogue</h2>
//                 <label>Product Name:</label>
//                 <input type='text' id="pname" value={pname} onChange={handlePname} required/>

//                 <label>Product Price:</label>
//                 <input type='number' id='pprice' value={pprice} onChange={handlePprice} required/>

//                 <label>Product description:</label>
//                 <input type='text' id='pdescription' value={pdescription} onChange={handlePdescription} required/>

//                 <button id='sbm' type='submit'>Add</button>

//             </form>
//             <div className='msg'>
//                 {msg()}
//             </div>
//         </div>
      
//     </div>
//   )
// }







import "./Pc.css";

import React, { useState } from 'react';

export default function Pc() {
    const [pname, setPname] = useState("");
    const [pprice, setPprice] = useState("");
    const [pdescription, setPdescription] = useState("");
    const [products, setProducts] = useState([]);
    const [submit,setSubmit]=useState(false);

    function handlePname(e) {
        setPname(e.target.value);
    }

    function handlePprice(e) {
        setPprice(e.target.value);
    }

    function handlePdescription(e) {
        setPdescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = {
            name: pname,
            price: pprice,
            description: pdescription
        };
        setProducts([...products, newProduct]);
        setSubmit(true);
        clearAll();
    }

    function clearAll() {
        setPdescription("");
        setPprice("");
        setPname("");
    }

    function msg() {
        if (submit) {
            return (
                <div>
                    <p>Product Added Successfully..</p>
                </div>
            );
        }
    }

    return (
        <div>

       
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Product Catalogue</h2>
                <label>Product Name:</label>
                <input type='text' id="pname" value={pname} onChange={handlePname} required />

                <label>Product Price:</label>
                <input type='number' id='pprice' value={pprice} onChange={handlePprice} required />

                <label>Product Description:</label>
                <input type='text' id='pdescription' value={pdescription} onChange={handlePdescription} required />

                <button className='sbm' type='submit'>Add</button>
            </form>
            <div className='msg'>
                {msg()}
            </div>

        </div>
        <div className='product-list'>
                <h2>Added Products</h2>
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            <p><strong>Name:</strong> {product.name}</p>
                            <p><strong>Price:</strong> {product.price}</p>
                            <p><strong>Description:</strong> {product.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
