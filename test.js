
    document.getElementById('orderForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        // Construct the data to be sent
        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber
        };

        try {
            const response = await fetch('http://localhost:3000/sendOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('Order saved:', result);

            // Optionally, clear the form after submission
            document.getElementById('orderForm').reset();
        } catch (error) {
            console.error('Error:', error);
        }
    });

