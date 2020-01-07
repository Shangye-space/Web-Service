import jwt from 'jsonwebtoken';
import axios from 'axios';
import { getCookie } from '../cookies/cookies';

export async function verifyAuth() {
    const token = getCookie('auth_token');
    return new Promise((resolve, reject) => {
        if (token) {
            jwt.verify(token, 'secret', (err, decoder) => {
                if (decoder && decoder.data) {
                    const { email, password } = decoder.data;

                    axios
                        .post('http://localhost:3000/api/private/auth', {
                            email,
                            password,
                            token,
                        })
                        .then(res => {
                            if (email === res.data.email) {
                                resolve(true);
                            }
                        })
                        .catch(err => {
                            resolve(false);
                        });
                }
            });
        } else {
            resolve(false);
        }
    });
}

export async function fetchData() {
    const token = getCookie('auth_token');

    return new Promise((resolve, reject) => {
        jwt.verify(token, 'secret', (err, decoder) => {
            if (decoder && decoder.data) {
                const { email, password } = decoder.data;

                axios
                    .post('http://localhost:3000/api/private/auth', {
                        email,
                        password,
                        token,
                    })
                    .then(res => {
                        resolve(res.data);
                    })
                    .catch(err => {
                        resolve(err.message);
                    });
            }
        });
    });
}

export const validateAdmin = () => {
    const token = getCookie('auth_token');
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'secret', (err, decoder) => {
            if (decoder && decoder.data) {
                const { email, password } = decoder.data;

                axios
                    .post('http://localhost:3000/api/private/admin/validate', {
                        email,
                        password,
                        token,
                    })
                    .then(res => {
                        console.log(res.data);
                        resolve(res.data.admin);
                    })
                    .catch(err => {
                        resolve(err.message);
                    });
            }
        });
    });
};
