import {React, useRef} from 'react';
import classes from './NewMeetupForm.module.css'



function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(evt) {
        evt.preventDefault();

        const meetupDataObj = {
            title: titleInputRef.current.value,
            image: imgInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value
        }



        props.onAddMeetup(meetupDataObj);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup image</label>
                <input type='url' required id='image' ref={imgInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Meetup description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button type='submit'>Add Meetup</button>

            </div>
        </form>
    );
}

export default NewMeetupForm;
