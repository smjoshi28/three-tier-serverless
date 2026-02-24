async function fetchUserData() {
    const userId = document.getElementById('userId').value;
    if (!userId) {
        alert('Please enter a User ID');
        return;
    }

    try {
        const response = await fetch(`https://ub5izr40ze.execute-api.us-east-1.amazonaws.com/Prod/users?userId=${userId}`);
        const data = await response.json();
        const userDetails = document.getElementById('userDetails');
        
        if (response.ok) {
            userDetails.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            userDetails.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}
