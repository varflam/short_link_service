import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../api/apiSlice';
import { setAuthUser, setError, setLoading } from '../store/slices/userSlice';


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
                dispatch(setLoading());
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

    return {
        onLoginUser
    };
    
}

export default useLoginUser;