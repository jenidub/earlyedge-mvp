import { useState, useContext, useRef } from 'react';
import PostListContext, { Post } from '../Context/PostListContext';
import PageLayout from '../PageViews/PageLayout';
import { NewPostForm } from '../Context/PostType';
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { CATEGORY_LABELS } from '../Context/PostType';

function AddUpdate() {
    const { postList, setPostList } = useContext(PostListContext);

    const [ formData, setFormData ] = useState<NewPostForm>({
        postTitle: "",
        postDescription: "",
        postLink: "",
        postCategory: "None",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [ buttonLabel, setButtonLabel ] = useState("Select Post Category");

    const validateData = (formData: NewPostForm): Record<string, string> => {
        const errors: Record <string, string> = {};
        if (!formData.postTitle) {
            errors.postTitle = "Post title is required"
        }
        if (!formData.postDescription) {
            errors.postDescription = "Post description is required"
        }
        if (!formData.postCategory) {
            errors.postCategory = "Post category is required"
        }

        return errors;
    }

    const updatePostList = (e: any) => {
        e.preventDefault();
        const validationErrors = validateData(formData);

        if(Object.keys(validationErrors).length === 0) {
            setPostList([...postList, formData]);
            setFormData({
                postTitle: "",
                postDescription: "",
                postLink: "",
                postCategory: "None",
            });
        } else {
            setErrors(validationErrors);
        }
    }

    const handleSelect = ( eventKey: string ) => {
        setButtonLabel(eventKey);
        if( eventKey ) {
            setFormData(prev => ({...prev, postCategory: eventKey}))
        }
    }

    return (
        <>
            <PageLayout>
                <h2 style={{textTransform: "uppercase", marginTop: "90px",}}><strong>Add an Update</strong></h2>
                <Form onSubmit={updatePostList}>
                    <Form.Group className='my-2' controlId=''>
                        <Form.Label>Post Title:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Title of the update post'
                            value={formData.postTitle}
                            onChange={(e) => setFormData(prev => ({...prev, postTitle: e.target.value}))}
                            isInvalid={!!errors.postTitle}
                        />
                        <Form.Text className=''>Enter a name for the update you are providing</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Post Title - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-2' controlId="">
                        <Form.Label>Post Description:</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={3}
                            placeholder='Describe your update in the box above'
                            value={formData.postDescription}
                            onChange={(e) => setFormData(prev => ({...prev, postDescription: e.target.value}))}
                            isInvalid={!!errors.postDescription}
                        />
                        <Form.Text className=''>Please share your update - provide as much detail as possible</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Post Description - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-2' controlId=''>
                        <DropdownButton id="dropdown-basic-button" title={buttonLabel} onSelect={handleSelect}>
                            {Object.entries(CATEGORY_LABELS).map(([key, value]) => (
                                <Dropdown.Item key={key} href="#" eventKey={value}>{value}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </Form.Group>
                    <Form.Group className='my-2' controlId=''>
                        <Form.Label>[Optional] Add a link for supporting media:  </Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Copy and paste the link for the media'
                            value={formData.postLink}
                            onChange={(e) => setFormData(prev => ({...prev, postLink: e.target.value}))}
                        />
                        <Form.Text className=''>Link to media or documents related to the update</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='my-2'>Submit Update</Button>
                </Form>
                <Button variant="secondary" href='/dashboard' className='my-2'>Return to Dashboard</Button>
            </PageLayout>
        </>
    )
}

export default AddUpdate;
