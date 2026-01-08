import { useState, useContext } from "react";
import { Card, Form, Button, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import PostListContext, { Post } from "../Context/PostListContext";
import PageLayout from "../PageViews/PageLayout";
import { CATEGORY_LABELS } from '../Context/PostType';

function UpdatePostDetail(props: any) {
    const { postList, setPostList } = useContext(PostListContext);
    const { handleClose, postTitle, postDescription, postCategory, postLink } = props;
    
    const [ currentTitle, setCurrentTitle ] = useState(postTitle);
    const [ currentDescription, setCurrentDescription ] = useState(postDescription);
    const [ currentCategory, setCurrentCategory ] = useState(postCategory);
    const [ currentLink, setCurrentLink ] = useState(postLink);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateData = (): Record<string, string> => {
        const errors: Record <string, string> = {};
        if (!currentTitle) {
            errors.postTitle = "Task title is required"
        }
        if (!currentDescription) {
            errors.postDescription = "Task description is required"
        }
        if (!currentCategory) {
            errors.postCategory = "Task category is required"
        }
        return errors;
    }

    const handleSelect = ( eventKey: string | null ) => {
        if( eventKey ) {
            setCurrentCategory(eventKey);
        }
    }

    const handleUpdate = (e: any) => {
        e.preventDefault();
        const validationErrors = validateData();

        if(Object.keys(validationErrors).length === 0) {
            const updatedPostList: Post[] = postList;
            const selectedPost: Post = postList.filter((post: Post) => post.postTitle === postTitle)[0];
            const selectedPostIndex: number = postList.findIndex((post: Post) => post.postTitle === postTitle);
            selectedPost.postTitle = currentTitle;
            selectedPost.postDescription = currentDescription;
            selectedPost.postCategory = currentCategory;
            selectedPost.postLink = currentLink;
            updatedPostList[selectedPostIndex] = selectedPost;
            setPostList([...updatedPostList]);
        } else {
            setErrors(validationErrors);
        }
    }

    return (
        <PageLayout>
            <h4 className='mb-4' style={{textTransform: "uppercase", textAlign: "center",}}>Selected Task</h4>
            <Card className='mt-2 mb-4' style={{margin: "5px", textAlign: "center", padding: "10px"}}>
                <h6>
                    <Badge pill bg="info">{postCategory}</Badge>
                </h6>
                <p style={{fontSize: "1.25em", fontWeight: "800"}}>{currentTitle}</p>
                <p style={{fontSize: "1.1em"}}>{currentDescription}</p>
                <p style={{}}>{currentCategory}</p>
                <p style={{fontSize: "1.1em"}}>{currentLink}</p>
            </Card>
            <h5 className='my-2' style={{}}>Edit the Selected Task</h5>
            <Form className='my-2' onSubmit={handleUpdate}>
                <Form.Text>Use the form below to edit the task information. Once you are done, click the Submit button to save and return to the Dashboard</Form.Text>
                <Form.Group className='my-3' controlId=''>
                    <Form.Label>Post Name: </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Name of the task'
                        value={currentTitle}
                        onChange={(e) => setCurrentTitle(e.target.value)}
                        isInvalid={!!errors.postTitle}
                    />
                    <Form.Text className=''>Edit the name for your post</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Invalid Post Title - please try again
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-3' controlId="">
                    <Form.Label>Post Description:  </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Describe your task' 
                        value={currentDescription} 
                        onChange={(e) => setCurrentDescription(e.target.value)} 
                        isInvalid={!!errors.postDescription}
                    />
                    <Form.Text className=''>Edit your post description</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Invalid Post Description - please try again
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-2' controlId=''>
                    <DropdownButton id="dropdown-basic-button" title="Select a Post Category" onSelect={handleSelect}>
                        {Object.entries(CATEGORY_LABELS).map(([key, value]) => (
                            <Dropdown.Item key={key} href="#" eventKey={value}>{value}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Form.Group>
                <Form.Group className='my-2' controlId=''>
                    <Form.Label>[Optional] Update the media link:  </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Copy and paste the link for the media'
                        value={currentLink}
                        onChange={(e) => setCurrentLink(e.target.value)}
                    />
                    <Form.Text className=''>Link to media or documents related to the update</Form.Text>
                </Form.Group>
                <Button className='mt-3' variant="primary" type="submit">Submit</Button>
            </Form>
            <Button variant="secondary" type="button" onClick={handleClose}>Close Window</Button>
        </PageLayout>
    )
}

export default UpdatePostDetail;
