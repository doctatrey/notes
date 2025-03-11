// Without Delegation
document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', handleClick);
})

// With Delegation
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.matches('.list-item')) {
        handleClick(event);
    }
});
