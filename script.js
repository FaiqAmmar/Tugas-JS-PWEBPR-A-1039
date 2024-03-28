var buttons = document.querySelectorAll('button')

document.getElementById('yes').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = './png/Tech.png';
    document.getElementById('main-text').innerText = 'Anda Berbohong!';
    document.getElementById('box').style.backgroundColor = '#E12E2E';
    document.getElementById('sub-text').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('no').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = './png/Student.png';
    document.getElementById('main-text').innerText = 'Anda Benar!';
    document.getElementById('box').style.backgroundColor = '#6FD240';
    document.getElementById('sub-text').innerText = 'Anda adalah seorang Mahasiswa'
});