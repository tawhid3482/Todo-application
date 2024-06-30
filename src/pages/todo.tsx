import { Button } from "@/components/ui/button";
import  Container  from "../components/ui/Container";
import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
    return (
        <Container>
            <p className="text-center text-gren-500 text-2xl">Todo page</p>
            <Button>ami</Button>
            <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todo;