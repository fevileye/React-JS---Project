import React from 'react';
import Input from '@material-ui/core/Input'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class inputCurrencyForm extends React.Component{

    constructor(){
        super();
        this.state = {
            currentCurrency: 1
        }
        this.handleChange=this.handleChange.bind(this);

    }

    handleChange(e)
    {
        this.setState({
            currentCurrency: e.target.value
        },() => this.props.calculateCurrency(this.state.currentCurrency));
    }

    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <div className='baseCurrencyDetail'>
                    <Typography variant="title" color="inherit" noWrap>
                        <p id="Title">United States Dollar</p>  
                    </Typography>
                    </div>
                    
                    <div className="baseCurrency">
                    <Typography variant="title" color="inherit" noWrap>
                        <p id="TitleCurrency">USD</p>  
                    </Typography>
                    </div>

                    <div className='currencyInput'>
                        
                        <Input 
                        type="number"
                        placeholder="Currency"
                        disableUnderline
                        onChange={this.handleChange} 
                        value={this.state.currentCurrency}
                            />
                    </div>
                </Toolbar>
             </AppBar>
            
            
        );
    }
}

export default inputCurrencyForm;