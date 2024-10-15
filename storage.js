const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const inputId = document.getElementById('storage-value');
    const input = inputId.value;

    // 
    if(id && value){
        localStorage.setItem(id,input);
    }
    
    idInput.value = '';
    inputId.value = '';

}