const getbooks = async (books) => {


 const base = `https://api.itbook.store/1.0/search/${books}`

const response = await fetch (base);

const data = await response.json();

 return data

};





