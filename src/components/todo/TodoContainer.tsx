import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="">
                <button>add todo </button>
                <button>filter</button>
            </div>
            <div className="bg-red-500 w-full h-[500px] rounded-xl p-5">
                <TodoCard></TodoCard>
            </div>
        </div>
    );
};

export default TodoContainer;