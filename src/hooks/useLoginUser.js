import { useLoginUserMutation } from '../api/apiSlice';
import { useDispatch } from 'react-redux';
import { setAuthUser, setError } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const useLoginUser = (navigation = true) => {
    const [loginUser] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formLoginUser = (user) => {
        let formBody = [];
    
        for (let property in user) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        
        return formBody = formBody.join("&");
    }

    const onLoginUser = (user) => loginUser(formLoginUser(user))
            .then(res => {
                if(res.error) {
                    dispatch(setError(res.error.data.detail));
                } else if(res.data) {
                    dispatch(setAuthUser({
                        ...user,
                        token: res.data.access_token}));
                    if(navigation) {
                        navigate('/');
                    }
                }
            });

    return {onLoginUser};
    
}

export default useLoginUser;