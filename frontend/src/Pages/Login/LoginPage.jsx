import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {

    }

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <div>
                    <h1>Fledge</h1>
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input onChange={e => {setEmail(e.target.value)}} type="email" className="form-control" id="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={e => {setPassword(e.target
                        .value)}} type="password" className="form-control" id="password"/>
                </div>
                <button type="submit">Login</button><br></br>
                <Link to={'/register'}>Sign Up</Link>
            </form>
        </div>
    );
}

export default LoginPage