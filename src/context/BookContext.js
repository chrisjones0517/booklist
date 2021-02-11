import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', id: 1 },
        { title: 'The Final Empire', author: 'Brandon Sanderson', id: 2 }
    ]);
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }]);
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;