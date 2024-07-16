import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      } else {
        dispatch(signInFailure(data.message || 'Google sign-in failed'));
      }
    } catch (error) {
      console.error(error);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <button className="flex items-center justify-center gap-2 px-4 py-2 hover:bg-gradient-to-r from-pink-500 to-orange-500 text-black rounded-full border-4 border-violet-600" type='button' onClick={handleGoogleClick}>
        <FcGoogle size={24} />
        Continue with Google
      </button>
    </div>
  );
}

export default OAuth;
