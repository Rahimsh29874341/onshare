const dropZone = document.querySelector('.drop-zone')
const browseBtn = document.querySelector('.browseBtn')
const fileInput = document.querySelector('#fileInput')

const bgProgress = document.querySelector('.bg-progress')

const host = "https://onshare.herokuapp.com/"
const uploadUrl = `${host}api/files`
const uploadEmail = `${host}api/files`

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    if (!dropZone.classList.contains('dragged')){
        dropZone.classList.add('dragged')
    }
})

dropZone.addEventListener('dragleave',()=>{
    dropZone.classList.remove('dragged')
})

dropZone.addEventListener('drop',(e)=>{
    dropZone.classList.remove('dragged')
    console.log('drop completed')
    const files = e.dataTransfer.files
    if(files.length){
        fileInput.files = files
        uploadFile();
    }
})

fileInput.addEventListener('change',()=>{
    uploadFile()
})

browseBtn.addEventListener('click',()=>{
    fileInput.click()
})

const uploadFile = ()=>{
    const file = fileInput.files[0]
    const formData = new FormData();
    formData.append('myfile',file)

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === XMLHttpRequest){
            console.log(xhr.response);
        }
    }

    xhr.upload.onprogress = updateProgress;
    
    xhr.open('POST', uploadUrl)
    xhr.send(formData)
}

const updateProgress = (e)=>{
    console.log(e)
    const percent = Math.round(e.loaded / e.total *100)
    bgProgress.style.width = `${percent}%`
}