import React, { Component } from 'react';
import './App.css';
import { Button, Container, Header, List, Message } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import Stats from './Stats'
var request = require('browser-request')

class App extends Component {
  constructor(){
    super()

    this.state = {
        money: 'Fetching',
        hashes: 'Fetching'
    }
    this.updateData = this.updateData.bind(this)
  }
  updateData(){
    let that = this
    request({uri:'https://addcoinplus-server.herokuapp.com/totalNumbers', header:'Access-Control-Allow-Origin:*',json:true}, function(er, res) {
    console.log(res, er);
    if(er){
      that.setState({money: '23', hashes: '4588842'})
      console.log(er);
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
                  Donate money to Organizations while you navigate without even realizing you are.
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
                <a rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb">
                  <Button color="green" className="installButton">
                    Install the Extension
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
                When you Start Addcoin Plus we start a background process that is minning a cryptocurrency called Monero. We automatically adjust the CPU usage to make sure it doesn't affect you in any way.
              </p>
            </Message>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
