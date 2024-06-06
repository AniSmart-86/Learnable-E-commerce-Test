export async function getAllData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
  
    return data;
  }
  
  export async function getSingleData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
  
    return data;
  }