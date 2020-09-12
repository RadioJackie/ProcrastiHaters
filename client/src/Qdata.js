import React,{Component}  from 'react'
import Data from './pages/Quote'
import * as domtoimagemore from 'dom-to-image-more'

class Qdata extends Component{
  constructor(){
    super()
    this.state = {
      qu: "",
      au: "",
      log: false,
      logd: false,
      img:[],
      rno: "https://pixabay.com/get/54e7d4474355ac14f6da8c7dda79367d123ed9e156506c48702972d69445c659b0_1280.jpg"
    }
    this.handleClick = this.handleClick.bind(this);
}
  printDocument() {
    domtoimagemore.toJpeg(document.getElementById('download'),{quality: 100})
    .then(function (dataUrl) {
        window.saveAs(dataUrl, 'quotes4u.jpeg');
        
    });
  }
componentDidMount(){
    this.setState({log: true})
    this.setState({log: true})
    fetch(`https://pixabay.com/api/?key=13717451-ee5772a392bbcd2c03092d8ad&q=life`)
    .then(response => response.json())
    .then(data =>{this.setState({img: data.hits, log: false})})
  }
   handleClick() {
    this.generateQuote();
    this.generateImages()
  }
   generateQuote = () => {
    this.setState({logd: true})
    const chosenQuote = [];
    const quotes = Data;
    let randomNumber = Math.floor((Math.random() * Data.length) + 1);
quotes.forEach(function(element, index) {
      if(index === randomNumber) {
        chosenQuote.push(element)
      }
    })
    this.setState({
      qu:chosenQuote[0].quoteText,
      au:chosenQuote[0].quoteAuthor,
      logd: true
    })
  }
  generateImages = ()=> {
    
    const ChosenImage = [];
    const images = this.state.img
    let randomImages = Math.floor((Math.random() * this.state.img.length) + 1)
images.forEach(function(element, index){
      if (index === randomImages) {
        ChosenImage.push(element)
      }
    })
    this.setState({
      rno: ChosenImage[0].largeImageURL,
    })
  }
  
  render(){
    //let qd = this.state.logd ?  null : ""
    const imgs = this.state.log ? <h1> Loading </h1> : <img src={this.state.rno} alt="Pixabay Pics" className="img-responsive" />
    return(
      <>
    <div className="Main">
    <div className="download" id="download">        
    <div className="row" id="box-search">
    <div className="thumbnail text-center">
    {imgs}
    <div className="caption">
    <p className="qu">{this.state.qu}</p>
     <p className="au">{this.state.au}</p>
        </div>
    </div>
</div>
</div>
<div className="downloads">
<div className="rano" >
          <button id="new-quote" className="bt" onClick={this.handleClick}>My Quote</button>
        </div>
        <br/>
            <button className="bt" onClick={this.printDocument}>DOWNLOAD</button>
        </div>
        </div>
        </>
)
  }
}
export default Qdata