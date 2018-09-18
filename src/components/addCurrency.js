import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class addCurrency extends React.Component{
    constructor(){
        super()
        this.state={
            currencyName: '-- Select --'
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }

    handleCancel(e){
        this.props.setShowAddComponent(false);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.currencyName !== '-- Select --')
        {
            this.props.addCurrency(this.state.currencyName);
            this.props.setShowAddComponent(false);
            this.setState({
                currencyName: '--Select--'
            })
        }
    }

    handleChange(e){
        this.setState({
            currencyName: e.target.value
        });
    }

    render(){
        return(
            <div>
            <Card className="item">
                <CardContent>
                        <div className="addCurrencyListDown">
                        <TextField className="textField" select label="Add Currency" value={this.state.currencyName} onChange={this.handleChange} >
                            {this.props.availableListDown.map(option => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        </div>
                </CardContent>
                <CardActions>
                        <div className="okButton">
                            <Button onClick={this.handleSubmit} variant="contained" color="primary" >OK</Button>
                        </div>
                            <Button onClick={this.handleCancel} variant="contained" color="secondary">Cancel</Button>
                       
                </CardActions>
            </Card>
            </div>
           
            
        )
    }
}

export default addCurrency;