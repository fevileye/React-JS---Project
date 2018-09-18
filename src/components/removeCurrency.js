import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


class removeCurrency extends React.Component{
    
    constructor(){
        super();
        this.handleYesButton=this.handleYesButton.bind(this);
        this.handleNoButton=this.handleNoButton.bind(this);
        this.state={
            openDialog: true
        }
    }

    handleYesButton(){
        this.props.deleteCurrency();
    }

    handleNoButton(){
        this.setState({
            openDialog: false
        })
        this.props.setPopUp(false,[]);
    }
    render(){
        return(
            <Dialog
                open={this.state.openDialog}
                onClose={this.handleNoButton}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        {"Are you Sure ? "}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleYesButton} color="primary" autoFocus>Yes</Button>
                        <Button onClick={this.handleNoButton} color="primary">No</Button>
                    </DialogActions>
               
            </Dialog>
        
        )
    }
}

export default removeCurrency;