// import React, { useState } from 'react';
// import axios from 'axios';
// import './ForgotPassword.css';


// const ForgotPassword = () => {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');
//         setError('');
        
//         try {
//             const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/forgot-password`, { email });
//             setMessage(response.data.message);
//         } catch (err) {
//             const errorMsg = err.response?.data?.message || 'Something went wrong!';
//             setError(errorMsg);
//         }
//     };

//     return (
//         <div className="forgot-password-container">
//             <form onSubmit={handleSubmit} className="forgot-password-form">
//                 <h2>Forgot Password</h2>
//                 {message && <div className="success-message">{message}</div>}
//                 {error && <div className="error-message">{error}</div>}
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Send Reset Link</button>
//             </form>
//         </div>
//     );
// };

// export default ForgotPassword;
