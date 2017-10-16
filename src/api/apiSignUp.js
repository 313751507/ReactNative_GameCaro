import ipAddress from './ipaddress';

const apiSignUp = (email, name, password) => fetch(`http://${ipAddress}/dangky`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email,
        name,
        password
    })
});


export default apiSignUp;
