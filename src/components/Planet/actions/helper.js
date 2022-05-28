


export const sortByDate = (planets,sortOrder)=>{
    let sorted = planets.sort((a,b)=>{
       let dateA = new Date(a.releasedate).getTime();
       let dateB = new Date(b.releasedate).getTime();
 
 
       let order={
         ascendingOrder: dateA - dateB,
         descendingOrder: dateB - dateA
       }
       return order[sortOrder];
     })
 
    return sorted
   }
   