const apiSignUp = (email, name, password) => fetch('http://192.168.1.109:3000/dangky', {
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
