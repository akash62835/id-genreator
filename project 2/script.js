// script.js
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const address = document.getElementById('address').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('cardPhoto').src = e.target.result;
            document.getElementById('cardPhoto').style.display = 'block';
        }
        reader.readAsDataURL(photo);
    }

    document.getElementById('cardName').textContent = name;
    document.getElementById('cardAge').textContent = age;
    document.getElementById('cardGrade').textContent = grade;
    document.getElementById('cardAddress').textContent = address;
});
