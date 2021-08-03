import './App.css';
import React from 'react';
import Headlines from './Components/Headlines.js';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      result:{},
      page:"",
      isloaded: false
    };
  }

  componentDidMount() {
    this.makeHTTPRequest();
  }

  makeHTTPRequest = () => {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2a04891937984dfb9f7199e05fe87b12"

    fetch(url)
    .then(res => res.json())
    .then((result) =>{
      // success
      console.log(result)

      this.setState({
        result: result,
        isloaded: true
      })

    },(error)=>{
      // failure

      this.setState({
        isloaded: false,
        result: error,
      })

    })
  }

  changePage = (page) =>{
    this.setState({
      page: page
    })
  }

  render() {

    if(this.state.page == "home"){
      
    }


    if(this.state.isloaded){
      return (
        <div>
          <div className = "navbar">
            <a className= "" onClick={()=>{this.changePage("home")}}>Home</a>
            <a onclick={()=>{this.changePage("about")}}> About us</a>
          </div>
          {this.state.result.articles.map((item, index)=>{
            return <Headlines title={item.title} description={item.description} image={item.urlToImage}></Headlines>
          })}
        </div>
      );
    } else {
      return (
        <div>
          <div className = "navbar">
            <a className= "" onClick={()=>{this.changePage("home")}}>Home</a>
            <a onclick={()=>{this.changePage("about")}}> About us</a>
          </div>
        </div>
      );
    }
    
  }
  
}

export default App;
