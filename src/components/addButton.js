import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class addButton extends React.Component{

    constructor(){
        super();
        this.handleClicked= this.handleClicked.bind(this);
    }

    handleClicked(){
        this.props.setShowAddComponent(true);
    }

    render(){
        return(
            <div className="addButton">
            <Tooltip title="Add" > 
                <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClicked}> 
                    <AddIcon /> 
                </Button> 
            </Tooltip>
            </div>
        )
    }
}

export default addButton;