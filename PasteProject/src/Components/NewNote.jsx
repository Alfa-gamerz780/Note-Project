import React, { useState } from 'react'
import './NewNote.css'
import './animation.css'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createNote, updateNote } from '../features/pastefeature/PasteSlice'
import { set, useForm } from "react-hook-form";
import { useEffect } from 'react'

const NewNote = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const { id: noteId } = useParams();
    const dispatch = useDispatch();
    const allNote = useSelector((state) => state.note.notes);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();


   useEffect(() => {
    if (noteId) {
        const note = allNote.find((n) => n._id === noteId);

        if (note) {
            setTitle(note.title);
            setValue(note.content);
        }
    }
}, [noteId, allNote]);

    function handleNote() {
        const note = {
            title: title,
            content: value,
            _id: noteId ||
                Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if (noteId) {
            dispatch(updateNote(note));
        }
        else {
            dispatch(createNote(note));
        }

        setTitle('');
        setValue('');
        // setSearchParams({});

        // navigate("/pastes");
    }

    return (

            <div id='note-body'>

                <p>Title</p>
                <input
                    className={errors.noteTitle ? 'input-error' : ""}
                    type="text"
                    {...register(
                        'noteTitle',
                        {
                            required: { value: true, message: "Field is Requied" },
                            minLength: { value: 3, message: "Min Length is 3" },
                            maxLength: { value: 20, message: "Max Length is 20" }
                        })}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter Your Title'
                />
                {errors.noteTitle && <p>{errors.noteTitle.message}</p>}

                <br />

                <p>Note</p>
                <textarea
                    {...register(
                        'noteValue',
                        {
                            required: { value: true, message: "Field is Requied" },
                            minLength: { value: 3, message: "Min Length is 3" },
                        })}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Enter Your Content'
                ></textarea>

                <br />

                <div id='note-btn'>
                    <button
                        type='button'
                        className='bg-danger'
                        onClick={() => { navigate('/') }}
                    >Cancel</button>
                    <button
                        type='button'
                        onClick={handleNote}
                    >
                        {
                            noteId ? "Edit Note" : "Create Note"
                        }
                    </button>
                </div>
            </div>
    )
}

export default NewNote
