import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks, deleteBook } from "../features/library/thunk";

const BookList = () => {
  const dispatch = useDispatch();
  const { library, loading } = useSelector((state) => state.library);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h4 className="mb-3">📚 Book List</h4>
      {loading ? (
        <p>Loading...</p>
      ) : library.length > 0 ? (
        <ul className="list-group">
          {library.map((book) => (
            <li key={book.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{book.title}</strong> <br />
                  <small className="text-muted">by {book.author} ({book.year})</small>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch(deleteBook(book.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

      ) : (
        <p>No books found. Add your first book!</p>
      )}
    </div>
  );
};

export default BookList;
