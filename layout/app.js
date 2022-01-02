const searchBox = document.getElementById('searchbox');


  //update books

const updateBooks = async(books) => {  
   


  const bookList = document.getElementById('booklist')
   

const bookDetails = await getbooks(books);


bookDetails.books.forEach((book)=> {


  var eachList = `<div class=" border-solid border-2 border-indigo-600  ">

  <div class="wrapper bg-gray-400 antialiased text-gray-900 m-4 border-b border-t  border-teal-700  flex flex-row pl-10">
        
      <a href="${book.url}" target="_blank">
      <img src="${book.image}" alt=" random imgee" class="w-1/4 object-cover object-center rounded-lg shadow-md">    
      </a>
    
      
     <div class="bg-teal-300 p-6 rounded-lg shadow-lg pl-16 mt-10">
        
      <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate"> ${book.title}</h4>
     
      <div class="mt-1">
      ${book.price} </div>
     
      </div>
      </div>

    </div>`


  booklist.insertAdjacentHTML( 'beforeend', eachList );

  })
};



//update Image



//getBook value

const handleClick = () => {
const books = searchBox.value.trim();
const bookList = document.getElementById('booklist')
   
  bookList.querySelectorAll('*').forEach(n => n.remove())
  

//update the box with a new book
  updateBooks(books)

.then(data => updateBooks(data))
.catch(err=>console.log(err));

 
};

















