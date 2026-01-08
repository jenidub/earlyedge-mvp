import { Container, Form, Col, Row, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState, useContext } from 'react';

import type { Post } from '../Context/PostListContext';
import PostCard from '../Post/PostCard';
import PostListContext from '../Context/PostListContext';
import AddPost from '../Post/AddPost';
import { CATEGORY_LABELS } from '../Context/PostType';

function PostGridView() {
    const { postList } = useContext(PostListContext);
    const GRID_SIZE = 3;

    const [ buttonLabel, setButtonLabel ] = useState("All");
    const [show, setShow] = useState(false);
    const [ fullscreen, setFullscreen ] = useState(true);
    const [ filteredPostList, setFilteredPostList ] = useState<Post[]>(postList);

    const updateGrid = [];
    for (let i = 0; i < filteredPostList.length; i+= GRID_SIZE) {
        updateGrid.push(filteredPostList.slice(i, i + GRID_SIZE))
    }

    function handleChange(tagName: string) {
        let updatedList: Post[];
        setButtonLabel(tagName);

        if (tagName == "All") {
            updatedList = postList;
        } else {
            updatedList = postList.filter((post: Post) => post.postCategory == tagName)
        }
        setFilteredPostList(updatedList);
    }

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    return (
        <>
            <Container style={{textAlign: "center",}}>
                <h2 style={{margin: "30px 0px 10px 0px", textTransform: "uppercase", textAlign: "center", color: "#35D7F6", fontWeight: "800"}}>PROJECT UPDATE LIST</h2>
                <div className='d-flex justify-content-center'>
                    <Button variant="primary" id="addItem" size="lg" onClick={handleShow} style={{marginRight: "20px"}}>
                        Add New Project Update
                    </Button>
                    <Form.Group className='my-2' controlId=''>
                        <DropdownButton id="dropdown-basic-button" title={buttonLabel} onSelect={handleChange}>
                            {Object.entries(CATEGORY_LABELS).map(([key, value]) => (
                                <Dropdown.Item key={key} href="#" eventKey={value}>{value}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </Form.Group>
                </div>
                {updateGrid.map((rowItems: Post[], rowIndex: number) => (
                    <Row key={rowIndex} style={{margin: "20px 0px"}}>
                        {rowItems.map((post: Post, itemIndex: number) => (
                            <Col md={4}>
                                <PostCard 
                                    key={itemIndex}
                                    postTitle={post.postTitle}
                                    postDescription={post.postDescription}
                                    postDate={post.postDate}
                                    postCategory={post.postCategory}
                                    postLink={post.postLink}
                                />
                            </Col>

                        ))}
                    </Row>
                ))}  
            </Container>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body>
                    <AddPost />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PostGridView;
