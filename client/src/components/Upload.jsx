import React, {Component} from 'react';
import './Upload.css';
import axios from 'axios';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spreadSheetData: []
    }
  }

  handleClick() {
    console.log('Entered handleClick....');
    axios.get('http://localhost:3000/getSpreadsheetData')
      .then((res) => {
        console.log(res.data);
        this.setState({
          spreadSheetData: res.data
        });
      })
      .catch(() => {
        console.log("Error!!!");
      });
  }

  generateSpreadSheetDataTable() {
  const tableItems = this.state.spreadSheetData.map((row, index) =>
    <li key={index}>
      {row}
    </li>
  );
  return (
    <ul>{tableItems}</ul>
  );
}

  render() {

    return (
      <div className="Upload">

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
              <h2>Machine Learning</h2>
              <p>Submit data to get started!</p>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
              Data:
              <div>
              <ul>{ this.generateSpreadSheetDataTable() }</ul>
              </div>
              <form>
              </form>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
            <button type="button" className="button" onClick={this.handleClick.bind(this)}>Button</button>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="content content-lr">
            <div className="content-inside">
            <button type="submit" className="submit-button">Submit</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default Upload;