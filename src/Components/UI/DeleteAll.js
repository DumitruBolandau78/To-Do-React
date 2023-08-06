

function DeleteAll({ link, deleteAllItemsHandler }){
    return (
        <div onClick={deleteAllItemsHandler} className="shortcut-img">
            <img src={link} alt="delete icon"/>
        </div>
    )
}

export default DeleteAll;