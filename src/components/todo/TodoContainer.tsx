
const TodoContainer = () => {
    return (
        <div>
            <div className="">
                <button>add todo </button>
                <button>filter</button>
            </div>
            <div className="primary-gradient w-full h-full rounded-xl p-5 space-y-3">
              {/* {  <div className="bg-white p-3 text-2xl font-semibold flex justify-center items-center">
                    <p>There is no task panding</p>
                </div>} */}
            </div>
        </div>
    );
};

export default TodoContainer;