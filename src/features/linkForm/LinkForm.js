import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLink, setError } from '../../store/slices/linksSlice';

import { useSqueezeLinkMutation } from '../../api/apiSlice';

const LinkForm = () => {
    const [newLink, setNewLink] = useState('');
    const {token} = useSelector(state => state.user);
    const {links, error} = useSelector(state => state.links);
    const dispatch = useDispatch();
    const [squeezeLink] = useSqueezeLinkMutation();

    const onSubmit = e => {
        e.preventDefault();
        dispatch(setError(null));

        links.forEach(link => {
            if(link.target === newLink) {
               dispatch(setError('You have already squeezed this link'));
            }
        });

        const formedLink = newLink.split('').map(letter => {
            if(letter === ':') {
                return '%3A'
            } else if(letter === '/') {
                return '%2F'
            } else return letter;
        }).join('');

        const linkInfo = {
            link: formedLink,
            token
        }

        squeezeLink(linkInfo)
            .then(res => {
                if(res.data) {
                    const linkObj = {...res.data};
                    linkObj.short = `79.143.31.216/s/${linkObj.short}`;
                    dispatch(setLink(linkObj));
                } else if(res.error) {
                    dispatch(setError(res.error.data.detail[0].msg));
                }
            });   
        setNewLink('');
    };

    return (
        <>
            <form
                className='form'
                onSubmit={e => onSubmit(e)}>
                <label
                    className='form__label'
                    htmlFor="link">Squeeze link here</label>
                <input
                    minLength={1}
                    maxLength={65536}
                    className='form__input'
                    type="text" 
                    name="link"
                    id="link"
                    value={newLink}
                    onChange={e => setNewLink(e.target.value)}
                    placeholder="Enter your link"/>
                <button
                    className='form__button'
                    type="submit">Squeeze it!</button>
            </form>
            {error ? <p style={{'color': 'red'}}>{error}</p> : null}
        </>
    );
};

export default LinkForm;