function showHome() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Welcome to the Family Dashboard</h2><p>Select an option from the menu.</p>';
    // Optionally, you can also remove or hide the chart here
}

function showFamilyMembers() {
    fetch('/api/family_members')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            content.innerHTML = '<h2>Family Members</h2>';
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.textContent = `Name: ${member.name}, Age: ${member.age}, Role: ${member.role}`;
                content.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching family members:', error));
}

function showTasks() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Tasks</h2><p>List of tasks will go here.</p>';
}

function updateTime() {
    const now = new Date();
    document.getElementById('time').innerHTML = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);  // Updates the time every second

// Existing functions for showing family members and tasks
// Add your family members and tasks functions here
