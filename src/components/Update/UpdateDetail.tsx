import { useState, useEffect, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import UpdateListContext, { Update } from "../Context/UpdateContext";
import PageLayout from "../PageViews/PageLayout"; 
// import { TaskForm } from "./TaskTypes";

function UpdateDetail(props: any) {
    const { updateList, setUpdateList } = useContext(UpdateListContext);
    const { handleClose, updateTitle, updateDueDate, updateDescription, isUpdateCompleted} = props;
    
    const [currentTitle, setCurrentTitle] = useState(updateTitle);
    const [currentDueDate, setCurrentDueDate] = useState(updateDueDate);
    const [currentDescription, setCurrentDescription] = useState(updateDescription);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateData = (): Record<string, string> => {
        const errors: Record <string, string> = {};
        if (!currentTitle) {
            errors.taskTitle = "Task title is required"
        }
        if (!currentDueDate) {
            errors.taskDueDate = "Task due date is required"
        }
        if (!currentDescription) {
            errors.taskDescription = "Task description is required"
        }
        return errors;
    }

    const handleUpdate = (e: any) => {
        e.preventDefault();
        const validationErrors = validateData();

        if(Object.keys(validationErrors).length === 0) {
            const updatedUpdateList: Update[] = updateList;
            const selectedUpdate: Update = updateList.filter((update: Update) => update.updateTitle === updateTitle)[0];
            const selectedUpdateIndex: number = updateList.findIndex((update: Update) => update.updateTitle === updateTitle);
            selectedUpdate.updateTitle = currentTitle;
            selectedUpdate.updateDueDate = currentDueDate;
            selectedUpdate.updateDescription = currentDescription;
            updatedUpdateList[selectedUpdateIndex] = selectedUpdate;
            setUpdateList([...updatedUpdateList]);
        } else {
            setErrors(validationErrors);
        }
    }

    return (
        <PageLayout>
            <h4 className='mb-4' style={{textTransform: "uppercase", textAlign: "center",}}>Selected Task</h4>
            <Card className='mt-2 mb-4' style={{margin: "5px", textAlign: "center", padding: "10px"}}>
                <p style={{fontSize: "1.25em", fontWeight: "800"}}>{currentTitle}</p>
                <p style={{fontSize: "1.1em"}}>{currentDueDate}</p>
                <p style={{fontSize: "1.1em"}}>{currentDescription}</p>
                <p style={{fontSize: "1.1em"}}>{isUpdateCompleted ? "Task completed" : "Task not yet completed"}</p>
            </Card>
            <h5 className='my-2' style={{}}>Edit the Selected Task</h5>
            <Form className='my-2' onSubmit={handleUpdate}>
                <Form.Text>Use the form below to edit the task information. Once you are done, click the Submit button to save and return to the Dashboard</Form.Text>
                <Form.Group className='my-3' controlId=''>
                    <Form.Label>Task Name: </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Name of the task'
                        value={currentTitle}
                        onChange={(e) => setCurrentTitle(e.target.value)}
                        isInvalid={!!errors.taskTitle}
                    />
                    <Form.Text className=''>Edit the name for your task</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Invalid Task Title - please try again
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-3' controlId=''>
                    <Form.Label>Task Due Date:  </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Due date for the task'
                        value={currentDueDate}
                        onChange={(e) => setCurrentDueDate(e.target.value)} 
                        isInvalid={!!errors.taskDueDate}
                    />
                    <Form.Text className=''>Edit the due date for your task</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Invalid Task Due Date - please try again
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-3' controlId="">
                    <Form.Label>Task Description:  </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Describe your task' 
                        value={currentDescription} 
                        onChange={(e) => setCurrentDescription(e.target.value)} 
                        isInvalid={!!errors.taskDescription}
                    />
                    <Form.Text className=''>Edit your task description</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Invalid Task Description - please try again
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className='mt-3' variant="primary" type="submit">Submit</Button>
            </Form>
            <Button variant="secondary" type="button" onClick={handleClose}>Close Window</Button>
        </PageLayout>
    )
}

export default UpdateDetail;
