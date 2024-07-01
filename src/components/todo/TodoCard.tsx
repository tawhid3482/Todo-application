
const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 space-y-3">
        <input type="checkbox" name="" id="" />
        <p>Todo title</p>
        <p>Time</p>
        <p>description</p>
        <div className=" space-x-4">
            <button>del</button>
            <button>edit</button>
        </div>
    </div>
    );
};

export default TodoCard;