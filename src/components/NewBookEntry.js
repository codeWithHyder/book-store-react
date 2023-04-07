import React from 'react';

const NewBookEntry = () => (
  <div className=" newbookentry">
    <h4>Add New Book</h4>
    <form className="frm">
      <input
        className="newbk"
        type="text"
        placeholder="Add a new book..."
        id="newbook"
        name="bookname"
      />
      <input
        className="author"
        type="text"
        placeholder="Add author"
        id="author"
        name="author"
      />

      <button type="submit" className="submit">Add Book</button>
    </form>

  </div>
);
export default NewBookEntry;
