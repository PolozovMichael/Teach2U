import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ConfirmEmail() {
  const { uidb64, token } = useParams();
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const [confirmationError, setConfirmationError] = useState(null);

  async function handleConfirmation() {
    try {
    const response = axios.get('http://127.0.0.1:8000/api/activate/'+uidb64+'/'+token);
      console.log(response.data);
      setConfirmationSuccess(true);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setConfirmationError('The confirmation link has expired.');
      } else {
        setConfirmationError('An error occurred while confirming your email.');
      }
    }
  }

  useEffect(() => {
    handleConfirmation();
  }, []);

  return (
    <div>
      {confirmationSuccess && (
        <p>Your email has been successfully confirmed.</p>
      )}
      {confirmationError && (
        <p>An error occurred: {confirmationError}</p>
      )}
      {!confirmationSuccess && !confirmationError && (
        <p>Confirming email...</p>
      )}
    </div>
  );
}

export default ConfirmEmail;
