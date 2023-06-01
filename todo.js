function ToDo({chore, index, completed}) {
    function removeChore(){
        completed(index);
    }
    return (
        <ul>
            <li className='task' onClick={removeChore}>{chore.text}</li>
        </ul>
    ) 
}