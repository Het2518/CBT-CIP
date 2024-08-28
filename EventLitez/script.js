const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    const event = {
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation
    }

    addEventToList(event);
    eventForm.reset();
})


const addEventToList = (event) => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event-item');

    eventDiv.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Location: ${event.location}</p>
        `;

    eventList.appendChild(eventDiv);

}