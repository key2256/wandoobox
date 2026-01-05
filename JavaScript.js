// 팝업 열기
function openModal(id) {
    document.getElementById('modal-' + id).style.display = 'block';
}

// 팝업 닫기
function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
}

// 화면 밖을 눌러도 닫히게 하기 (선택사항)
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}