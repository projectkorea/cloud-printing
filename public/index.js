fetch('/api/token', {
    credentials: 'include', // 쿠키를 자동으로 포함시키기 위해 설정
})
    .then((response) => response.json())
    .then((data) => {
        if (data === 'success') hLogin.textContent = '로그인 완료'
    })
    .catch((error) => console.error(error))
