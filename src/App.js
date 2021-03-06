import React, { Component } from 'react';
import './App.css';
import { Button, Container, Header, List, Message } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import Stats from './Stats'
var request = require('browser-request')

// const chrome   = navigator.userAgent.indexOf('Chrome') > -1;
// const firefox  = navigator.userAgent.indexOf('Firefox') > -1;
// const pluginLink = firefox ? "https://firefox.com" : "https://chrome.google.com/webstore/detail/addcoin-plus/mclcnpebabomakkfcldfiiglfokllcpa"
const pluginLink = "https://chrome.google.com/webstore/detail/addcoin-plus/mclcnpebabomakkfcldfiiglfokllcpa"

class App extends Component {

  constructor(){
    super()

    this.state = {
        money: 0.000,
        hashes: 0.00
    }
    this.updateData = this.updateData.bind(this)
  }
  updateData(){
    let that = this
    request({uri:'https://addcoinplus-server.herokuapp.com/totalNumbers', header:'Access-Control-Allow-Origin:*',json:true}, function(er, res) {
    // console.log(res, er);
    if(er){
      that.setState({money: '23', hashes: '4588842'})
      // console.log(er);
    }else{
      that.setState({money: res.body.TotalMoney.toFixed(3), hashes:res.body.TotalHashes})
    }})
  }
  render() {
    let that = this
    setTimeout(function(){that.updateData()}, 1000);
    return (
      <div className="App">
        <Grid stackable>
          <Grid.Row columns={2} className='home-row'>
            <Grid.Column className='left-column'>
              <Stats className="stats" money={this.state.money} hashes={this.state.hashes}/>
            </Grid.Column>
            <Grid.Column className="right-column">
              {/*  */}
              <Container textAlign="left" className="headerContainer">
                <Header as='h1' className="headerText">
                  Addcoin Plus
                </Header>
                <p className="headerBody">
                  Make money for charities while you navigate on the browser by sharing spare CPU.
                </p>
              </Container>
              {/*  */}
              <Container className="featuresContainer">
                <List>
                  <List.Item>
                    <List.Icon name='checkmark box' color="green"/>
                    <List.Content>Frictionless experience</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='checkmark box' color="green"/>
                    <List.Content>Decide the Organization to which you want to donate</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='checkmark box' color="green"/>
                    <List.Content>You don't even need to log in</List.Content>
                  </List.Item>
                </List>
              </Container>
              {/*  */}
              <Container className="installContainer">
                <a rel="chrome-webstore-item" href={pluginLink}>
                  <Button color="green" className="installButton">
                    Install the Chrome Extension
                  </Button>
                </a>
              </Container>


            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="footer">
            <Message>
              <Message.Header>
                How do we do it?
              </Message.Header>
              <p>
                When you run Addcoin Plus we start a background process that is mining a cryptocurrency called Monero. We automatically adjust the CPU usage to make sure it doesn't affect you in any way.
              </p>
            </Message>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
