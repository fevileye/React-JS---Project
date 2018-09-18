import React from 'react';
import CurrencyList from './components/currencyList.js';
import AddCurrency from './components/addCurrency.js';
import InputCurrencyForm from './components/inputCurrencyForm.js';
import RemoveCurrency from './components/removeCurrency.js';
import {backendUrl} from './config.js';
import AddButton from './components/addButton.js';
import 'whatwg-fetch';

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            ratesData: [],
            selectedRate: ['IDR','EUR','GBP','SGD'],
            availableListDown: ['-- Select --','CAD','GBP','CHF','SGD','INR','MYR','JPY','KRW','EUR','IDR'],
            currencyDesctiption: [
                {value:"Indonesian Rupiah",key:"IDR"},
                {value:"Canadian Dollat",key:"CAD"},
                {value:"British Pound",key:"GBP"},
                {value:"Swiss Franc",key:"CHF"},
                {value:"Singaporean Dollar",key:"SGD"},
                {value:"Indian Rupee",key:"INR"},
                {value:"Malaysian Ringit",key:"MYR"},
                {value:"Japanese Yen",key:"JPY"},
                {value:"South Korean Won",key:"KRW"},
                {value:"Euro",key:"EUR"}
            ],
            flagDeletePopup: false,
            flagAddPopup: false,
            deletedData: null,
            currentCurrency: 1
        }

        this.loadData=this.loadData.bind(this);
        this.addCurrency=this.addCurrency.bind(this);
        this.deleteCurrency=this.deleteCurrency.bind(this);
        this.calculateCurrency=this.calculateCurrency.bind(this);
        this.mapAvailableListDown= this.mapAvailableListDown.bind(this);
        this.setPopUp= this.setPopUp.bind(this);
        this.setShowAddComponent= this.setShowAddComponent.bind(this);
    }

    componentDidMount(){
            this.loadData();
    }

    setShowAddComponent(flag){
        this.setState({
            flagAddPopup: flag
        });
    }

    setPopUp(popUpFlag,deletedData){
    
        this.setState({
            flagDeletePopup: popUpFlag,
            deletedData: deletedData
        });
    }

    loadData(){
        this.setState({
            ratesData: [],
            availableListDown: ['-- Select --','CAD','GBP','CHF','SGD','INR','MYR','JPY','KRW','EUR','IDR']
        });

        fetch(backendUrl+'?base=USD&&symbols='+this.state.selectedRate.join())
        .then(res => res.json())
        .then(result => {
            Object.keys(result.rates).forEach( key => {
               let tempDescription='';
               this.state.currencyDesctiption.forEach( data =>{
                   
                    if (data.key === key)
                    {
                        tempDescription=data.value;
                    }
                 })

               let constructedData={
                   currency: key,
                   rate: result.rates[key],
                   calculatedRate: result.rates[key]*this.state.currentCurrency,
                   description: tempDescription
               }

               this.mapAvailableListDown(key);

               this.setState({
                   ratesData: [...this.state.ratesData,constructedData]
               }); 

            });
        })
        .catch(err => console.log('Unable to connect to Backend '+ err));
    }

    mapAvailableListDown(currency){
        let deletedIndex = this.state.availableListDown.indexOf(currency);
        this.state.availableListDown.splice(deletedIndex,1);
    };

    addCurrency(currencyName){
        this.setState({
            selectedRate: [...this.state.selectedRate,currencyName]
        },() => {
            this.loadData();
        });
        
    }

    deleteCurrency(){     
        let deletedIndex= this.state.selectedRate.indexOf(this.state.deletedData);
        this.state.selectedRate.splice(deletedIndex,1);
        this.setState({
            availableListDown: [...this.state.availableListDown,this.state.deletedData],
            flagDeletePopup: false
        }, () =>{
            this.loadData();
        });        
    }

    calculateCurrency(currentCurrency){
        let updatedCalculatedRate = [];
        this.state.ratesData.map((currency) =>{
            let tempDescription='';
            this.state.currencyDesctiption.forEach( data =>{
                
                 if (data.key === currency.currency)
                 {
                     tempDescription=data.value;
                 }
              })

            let tempConstructData={
                currency: currency.currency,
                rate: currency.rate,
                calculatedRate: (currentCurrency*currency.rate),
                description: tempDescription
            };

            updatedCalculatedRate=[...updatedCalculatedRate,tempConstructData];
        })
        
        this.setState({
            ratesData: []
        });

        this.setState({
            ratesData: updatedCalculatedRate,
            currentCurrency: currentCurrency
        });
        
    }

    render(){
        return(
            <div className="mainApp" >
                <InputCurrencyForm calculateCurrency={this.calculateCurrency} />
                {
                    this.state.flagAddPopup ? (<AddCurrency addCurrency={this.addCurrency} availableListDown={this.state.availableListDown} setShowAddComponent={this.setShowAddComponent}/> ) 
                    : (<AddButton setShowAddComponent={this.setShowAddComponent} />)
                }
                
                <CurrencyList selectedRates={this.state.ratesData} setPopUp={this.setPopUp}  />
                {
                    this.state.flagDeletePopup ? (<RemoveCurrency deleteCurrency={this.deleteCurrency} setPopUp={this.setPopUp}  />)
                    :''
                }
            </div>
        )
    }
}

export default App;