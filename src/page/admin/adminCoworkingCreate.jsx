import { useState } from "react";

const CreateCoworking = ()=>{
// I create a stage to display a success or error message
  const [message, setMessage] = useState(null);
// I create a function called by my event listener
 // to create a coworking
 // the function is asynchronous, because we do a fetch inside
const handleCreateCoworking = async (event) => {
   // I prevent the default reloading of the page on submit
   event.preventDefault();

   // I get the values ​​from the form
   
   const name = event.target.name.value;
   const priceByMonth = event.target.priceByMonth.value;
   const priceByDay = event.target.priceByDay.value;
   const priceByHour = event.target.priceByHour.value;
   const addressNumber = event.target.addressNumber.value;
   const addressStreet = event.target.addressStreet.value;
   const addressCity = event.target.addressCity.value;
   const addressPostcode = event.target.addressPostcode.value;
   const superficy = event.target.superficy.value;
   const capacity = event.target.capacity.value;

   // I create an object with the values
   // which corresponds to what the api expects (model / table)
   // names must match
   // and the types too
   const coworkingToCreate = {
     name: name,
     price: {
       month: priceByMonth,
       day: priceByDay,
       hour: priceByHour,
     },
     address: {
       number: addressNumber,
       street: addressStreet,
       city: addressCity,
       postCode: addressPostcode,
     },
     superficy: superficy,
     capacity: capacity,
   };

// I transform my object into JSON
   const coworkingToCreateJson = JSON.stringify(coworkingToCreate);

   // I retrieve my token in local storage
   const token = localStorage.getItem("jwt");

// I make my fetch call
   // on the coworking creation URL
   // of type POST
   // with the token in the Bearer authorization header
   // and combine the data to create coworking
   const createCoworkingResponse = await fetch("http://localhost:3000/api/coworkings", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Authorization: "Bearer " + token,
     },
     body: coworkingToCreateJson,
   });
// if the coworking creation response has a status 201
   // I create a success message
   // otherwise error
   if (createCoworkingResponse.status === 201) {
     setMessage("Coworking is created !");
   } else {
     setMessage("error !");
   }
 };

 return (
   <>
     {message && <p>{message}</p>}
     <form onSubmit={handleCreateCoworking}>
       <div>
         <label>
           Nom
           <input type="text" name="name" />
         </label>
       </div>
       <div>
         <label>
           Prix par mois
           <input type="number" name="priceByMonth" />
         </label>
       </div>
       <div>
         <label>
           Prix par jour
           <input type="number" name="priceByDay" />
         </label>
       </div>
       <div>
         <label>
           Prix par heure
           <input type="number" name="priceByHour" />
         </label>
       </div>
       <div>
         <label>
           Adresse : Numéro
           <input type="text" name="addressNumber" />
         </label>
       </div>
       <div>
         <label>
           Adresse : Rue
           <input type="text" name="addressStreet" />
         </label>
       </div>
       <div>
         <label>
           Adresse : Ville
           <input type="text" name="addressCity" />
         </label>
       </div>
       <div>
         <label>
           Adresse : Postcode
           <input type="text" name="addressPostcode" />
         </label>
       </div>
       <div>
         <label>
           Superficie
           <input type="number" name="superficy" />
         </label>
       </div>
       <div>
         <label>
           Capacité
           <input type="number" name="capacity" />
         </label>
       </div>

       <input type="submit" />
     </form>
   </>
 );
}
export default CreateCoworking;