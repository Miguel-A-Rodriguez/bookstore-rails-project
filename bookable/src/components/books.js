import React from 'react';

function Books(props) {
  return (
    <div>
        <h1>APIからの本</h1>
        {props.books.map((book) => {
            return <div key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.body}</p>
                </div>
        })} 
    </div>
  )
}

export default Books;