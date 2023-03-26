const rootDomain = location.origin
const dropZone = document.getElementById('hDropZone')
const fileInput = document.getElementById('hFileInput')

const initLogin = () => {
    fetch('/api/token', {
        credentials: 'include', // 쿠키를 자동으로 포함시키기 위해 설정
    })
        .then((response) => response.json())
        .then((data) => {
            if (data === 'success') hLogin.textContent = '로그인 완료'
        })
        .catch((error) => console.error(error))
}

// 파일 드롭 이벤트 리스너 등록
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault()
    dropZone.classList.add('drag-over')
})

dropZone.addEventListener('dragleave', (event) => {
    event.preventDefault()
    dropZone.classList.remove('drag-over')
})

dropZone.addEventListener('drop', (event) => {
    event.preventDefault()
    dropZone.classList.remove('drag-over')
    fileInput.files = event.dataTransfer.files
})

// 파일 선택 이벤트 리스너 등록
fileInput.addEventListener('change', (event) => {
    event.preventDefault()
    const files = event.target.files
    handleFiles(files)
})

// 업로드할 파일 처리
async function handleFiles(files) {
    try {
        // 파일을 FormData 객체로 변환
        const formData = new FormData()
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i])
        }

        // 파일 업로드 요청 생성
        const options = {
            method: 'GET',
            body: formData,
        }

        const response = await fetch(`${rootDomain}/ezeep/file-upload`, options)
        if (response.ok) {
            console.log('File uploaded successfully.')
        } else {
            const data = await response.text()
            console.error(`Error uploading file: ${response.status} - ${response.statusText} - ${data}`)
        }
    } catch (error) {
        console.error('Error uploading file:', error)
    }
}

initLogin()
