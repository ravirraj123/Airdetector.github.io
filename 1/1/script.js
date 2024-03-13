document.addEventListener('DOMContentLoaded', function() {
    // Simulated sensor data
    const sensorData = {
        percentage: 75,
        parameters: [
            { label: 'Parameter 1', value: 30 },
            { label: 'Parameter 2', value: 40 },
            { label: 'Parameter 3', value: 30 }
        ]
    };

    // Display percentage
    document.getElementById('percentage').innerText = `Percentage: ${sensorData.percentage}%`;

    // Create pie chart
    const pieOptions = {
        series: sensorData.parameters.map(param => param.value),
        labels: sensorData.parameters.map(param => param.label),
        chart: {
            type: 'pie',
        },
    };
    new ApexCharts(document.getElementById('chartContainer'), pieOptions).render();

    // Create line chart
    const lineOptions = {
        series: [{
            name: 'Sensor Data',
            data: [10, 20, 25, 35, 45, 50, 60]
        }],
        chart: {
            type: 'line',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
    };
    new ApexCharts(document.getElementById('chartContainer'), lineOptions).render();
});
