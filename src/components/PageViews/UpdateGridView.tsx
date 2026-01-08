import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';

import { Update } from '../Context/UpdateContext';
import UpdateCard from '../Update/UpdateCard';
import UpdateListContext from '../Context/UpdateContext';
import AddUpdate from '../Update/AddUpdate';

function UpdateGridView() {
    const { updateList } = useContext(UpdateListContext);
    const GRID_SIZE = 3;

    const updateGrid = [];
    for (let i = 0; i < updateList.length; i+= GRID_SIZE) {
        updateGrid.push(updateList.slice(i, i + GRID_SIZE))
    }

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    return (
        <>
            <Container style={{textAlign: "center",}}>
                <h2 style={{margin: "30px 0px 10px 0px", textTransform: "uppercase", textAlign: "center", color: "#35D7F6", fontWeight: "800"}}>UPDATE LIST</h2>
                <Button variant="primary" id="addItem" size="lg" onClick={handleShow} style={{margin: "5px 0px"}}>
                    Add New Task
                </Button>              
                {updateGrid.map((rowItems: Update[], rowIndex: number) => (
                    <Row key={rowIndex} style={{margin: "20px 0px"}}>
                        {rowItems.map((update: Update, itemIndex: number) => (
                            <Col md={4}>
                                <UpdateCard 
                                    key={itemIndex}
                                    updateTitle={update.updateTitle}
                                    updateDueDate={update.updateDueDate}
                                    updateDescription={update.updateDescription}
                                    isUpdateCompleted={update.isUpdateCompleted} 
                                />
                            </Col>

                        ))}
                    </Row>
                ))}  
            </Container>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body>
                    <AddUpdate />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateGridView;
