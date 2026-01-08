import { useState, useContext, useRef } from 'react';
import UpdateListContext, { Update } from '../Context/UpdateContext';
import PageLayout from '../PageViews/PageLayout';
import { UpdateForm } from './UpdateType';

import { Form, Button } from "react-bootstrap";

function AddUpdate() {
    const { updateList, setUpdateList } = useContext(UpdateListContext);

    const [ formData, setFormData ] = useState<UpdateForm>({
        updateTitle: "",
        updateDueDate: "",
        updateDescription: "",
        isUpdateCompleted: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateData = (formData: UpdateForm): Record<string, string> => {
        const errors: Record <string, string> = {};
        if (!formData.updateTitle) {
            errors.updateTitle = "Update post title is required"
        }
        if (!formData.updateDueDate) {
            errors.updateDueDate = "Update post due date is required"
        }
        if (!formData.updateDescription) {
            errors.updateDescription = "Update post description is required"
        }
        return errors;
    }

    const updateUpdatesList = (e: any) => {
        e.preventDefault();
        const validationErrors = validateData(formData);

        if(Object.keys(validationErrors).length === 0) {
            setUpdateList([...updateList, formData]);
            setFormData({
                updateTitle: "",
                updateDueDate: "",
                updateDescription: "",
                isUpdateCompleted: false,
            });
        } else {
            setErrors(validationErrors);
        }
    }

    return (
        <>
            <PageLayout>
                <h2 style={{textTransform: "uppercase", marginTop: "90px",}}><strong>Add an Update</strong></h2>
                <Form onSubmit={updateUpdatesList}>
                    <Form.Group className='my-2' controlId=''>
                        <Form.Label>Post Title:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Name of the task'
                            value={formData.updateTitle}
                            onChange={(e) => setFormData(prev => ({...prev, updateTitle: e.target.value}))}
                            isInvalid={!!errors.taskTitle}
                        />
                        <Form.Text className=''>Enter a name for the update you are providing</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Post Title - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-2' controlId=''>
                        <Form.Label>Task Due Date:  </Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Due date for the task'
                            value={formData.updateDueDate}
                            onChange={(e) => setFormData(prev => ({...prev, updateDueDate: e.target.value}))}
                            isInvalid={!!errors.taskDueDate}
                        />
                        <Form.Text className=''>Enter the due date for your task</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Task Due Date - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-2' controlId="">
                        <Form.Label>Task Description:  </Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Describe your task'
                            value={formData.updateDescription}
                            onChange={(e) => setFormData(prev => ({...prev, updateDescription: e.target.value}))}
                            isInvalid={!!errors.taskDescription}
                        />
                        <Form.Text className=''>Please share your update - provide as much detail as possible</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Post Description - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='my-2'>Submit Update</Button>
                </Form>
                <Button variant="secondary" href='/dashboard' className='my-2'>Return to Dashboard</Button>
            </PageLayout>
        </>
    )
}

export default AddUpdate;
