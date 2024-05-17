const ctx = document.getElementById('familyChart').getContext('2d');
const familyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Alice', 'Bob', 'Charlie'],
        datasets: [{
            label: 'Family Members by Age',
            data: [30, 32,5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart() {
    fetch('/api/family_ages')
        .then(response => response.json())
        .then(data => {
            familyChart.data.datasets[0].data = data.ages; // Assuming the endpoint returns JSON with an ages array
            familyChart.update();
        })
        .catch(error => console.error('Error updating chart data:', error));
}
