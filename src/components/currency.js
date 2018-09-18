import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete'

class currency extends React.Component
{

 constructor(){
     super();
     this.handleRemoveButton=this.handleRemoveButton.bind(this);
 }

 handleRemoveButton(){
    this.props.setPopUp(true,this.props.selectedRate.currency);
 }

 render(){
        return(
            <div>
            <Card className="item">
                <CardContent>  
                       <div className="itemDetail">
                        <div className="leftItem">
                            <ul>
                                <li>{this.props.selectedRate.currency} - {this.props.selectedRate.description}</li>
                                <li>1 USD = {this.props.selectedRate.currency} {this.props.selectedRate.rate} </li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="rightItem">
                            {this.props.selectedRate.currency} : 
                            {this.props.selectedRate.calculatedRate}
                        </div>
                       </div>
                </CardContent>
                <CardActions>
                        <div className="buttonItem">
                        <Button size="small" onClick={this.handleRemoveButton} variant="outlined" color="secondary">Delete <DeleteIcon/> </Button>
                        </div>
                </CardActions>
            </Card>
            </div>
        )
    }
}

export default currency;