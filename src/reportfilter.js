import React from 'react';
  
class Reprotfilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Transaction: '',
      Sku: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    this.setState({ [event.target.name]: event.target.value });


  }

  handleSubmit(event) {
    if(this.state.Transaction != "" && this.state.Sku != ""){
      const urlfilter= "http://localhost:8080/jasperserver/rest_v2/reports/reports/Test.html?Transaction="+this.state.Transaction+"&Sku="+this.state.Sku;
      const  newSrc= urlfilter;
      document.getElementById("iframReport").src= newSrc;

    }
    if(this.state.Transaction == "" && this.state.Sku != ""){
      const urlChange= "http://localhost:8080/jasperserver/rest_v2/reports/reports/Test.html?Sku="
      const newSrc = urlChange+this.state.Sku;
      document.getElementById("iframReport").src= newSrc;
    }
    if(this.state.Transaction != "" && this.state.Sku == ""){
      const urlChange= "http://localhost:8080/jasperserver/rest_v2/reports/reports/Test.html?Transaction="
      const newSrc = urlChange+this.state.Transaction;
      document.getElementById("iframReport").src= newSrc;
    }
    event.preventDefault();
  }
  handleDowload(event){
    const url = document.getElementById("iframReport").src;
    const urlReplacepdf = url.replace("html", "pdf");
    window.location.replace(urlReplacepdf);
    event.preventDefault();
  }

  render() {
    const url= ""

    return (
  <div>
     <form onSubmit={this.handleSubmit}>

     <label>
          Transaction:
          <input type="text" name="Transaction"value={this.state.transaction} onChange={this.handleChange} />

        </label>
        <label>
          Sku:
          <input type="text" name="Sku"value={this.state.Sku} onChange={this.handleChange} />

        </label>
        <input type="submit" value="Search" />
        <button onClick={this.handleDowload}>Click me</button>

      </form>

      <iframe id="iframReport" src={'http://localhost:8080/jasperserver/rest_v2/reports/reports/Test.html?Sku=""'} height="678" width="678" title="Iframe Example" ></iframe>
    </div>
    );
  }
}
export default Reprotfilter;
