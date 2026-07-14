import React, { useState } from 'react'
import './Pastes.css'
import './animation.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, resetNote } from '../features/pastefeature/PasteSlice'
import toast from 'react-hot-toast';

const Pastes = () => {
  const [searchData, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  // console.log(notes)

  const filterData = notes.filter(
    (note) => note.title.toLowerCase().includes(searchData.toLowerCase())
  )


  function handelReset() {
    alert("Do you Want to Reset all Notes")
    // dispatch(resetNote())
  }

  

  function handleDelete(noteId){
    console.log("Delete clicked:", noteId);
    dispatch(deleteNote(noteId));
  }

  return (

    <div>

      <button
        id='cr-btn'
        onClick={() => { navigate('/newNote') }}
      >Create Note</button>

      <button
        id='reset-btn'
        onClick={handelReset}
      >Reset Note</button>

      <div id='preview-note'>

        {
          filterData.length > 0 &&
          filterData.map((note) => (
            <div className="note" key={note?._id}>
              <p className="note-head">{note.title}</p>
              <hr />
              <p className="note-pre">{note.content}</p>
              <hr />
              <div className="edit-note">
                <button 
                onClick={() => handleDelete(note?._id)}
                className="bg-danger">Delete</button>
                <button onClick={() => navigate(`/newNote/${note._id}`)}>
                  Edit Note
                </button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Pastes
