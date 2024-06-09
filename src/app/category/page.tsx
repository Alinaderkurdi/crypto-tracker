import axios from "axios"
import Link from "next/link"


const getData = async ()=>{
    
    try {

        const data = await  axios({method:'get', baseURL:`https://pods.fan/api/v1/categories`})
        return data.data
    }catch(error:any){
        console.log('ERROR')
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
           // console.log('Error', error.message);
          }
         // console.log(error.config);
        }
}


export default async function  Category(){
    const cat = await getData();
    const category =  cat.Categories;


    return(
     <div>
        {
            category.map((cat: any)=>{
               // console.log(cat)
                return (
                    <Link href={`category/${cat.slug}`} key={cat.id}>
                     <h1>
                        {cat.name}
                     </h1>
                   </Link>
                )
                
            })
        }

     </div>
    )
}