import React from 'react';
import { Button } from 'react-bootstrap';
const ButtonComponent = () => 
(
    <>
        <div className="mb-5" >
            <Button style={{marginLeft:"550px", marginRight:"170px"}} variant="primary" size="lg">
                 Hire a Pro             
    </Button>{' '}
            <Button variant="primary" size="lg">
                Apply to Open Roles
    </Button>
        </div>
    </>

)
export default ButtonComponent;