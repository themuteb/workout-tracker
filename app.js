document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');

    // Set current date as default
    const dateInput = document.getElementById('date');
    dateInput.value = new Date().toISOString().substr(0, 10);

    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            date: dateInput.value,
            exercise: workoutForm.exercise.value,
            sets: workoutForm.sets.value,
            reps: workoutForm.reps.value,
            weight: workoutForm.weight.value,
        };

        fetch('/workout-log', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            workoutForm.reset();
            dateInput.value = new Date().toISOString().substr(0, 10);
        })
        .catch(error => console.error('Error:', error));
    });

    // Fetch and display progress (e.g., using Chart.js)
    // Example code for fetching data and updating the chart would go here
});
