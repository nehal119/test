import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Header from './Header';
import Chart from 'react-apexcharts';
const width = '600px';
const height = '600px';
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  padding: 40px;
  text-align: center;
  background-color: linen;
  color: paleVioletRed;
  border-radius: 20px;
  width: 80vw;
  height: 80vh;
`;
class PieChart extends Component {
  state = { selected: 'male'}
  data = [
    {
        city:'Lucknow',
        state:'Uttar Pradesh',
        people:{
            male:2000,
            female:2200,
           
        }
    },
    {
        city:'Gorakhpur',
        state:'Uttar Pradesh',
         people:{
            male:1800,
            female:1500,
           
        }
    },
    {
        city:'Kanpur',
        state:'Uttar Pradesh',
        people:{
            male:1850,
            female:1700,
           
        }
    }
  ]

  handleChangeL = field => state => {
    const selectedT = document.getElementById('population');
    let selectedL = selectedT.options[selectedT.selectedIndex].value;
    this.setState({ selected: selectedL });
  };
  handleChange = this.handleChangeL('email');

  render() {
    const optionsLocal = [];
    const seriesLocal = [];
  
    this.data.forEach(item => {
      if(this.state.selected === 'male') {
        seriesLocal.push(item.people.male);
        optionsLocal.push(item.city);
      } else if(this.state.selected === 'female') {
        seriesLocal.push(item.people.female);
        optionsLocal.push(item.city);
      } else {
        seriesLocal.push(+item.people.male + +item.people.female);
        optionsLocal.push(item.city);
      }
    })
    const options = {
      chart: {
        type: 'pie',
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      labels: optionsLocal
    }
    return (
      <div>
        <Header />
        <div className="container">
          <MessageBox className="col-sm-8 col-sm-offset-2">
            <div style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
            <label htmlFor="population">Select View Type</label>
            <select name="population" id="population" onClick={this.handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="total">Total</option>
            </select>
            </div>
            {/* <MessageBox>This is another page.</MessageBox> */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Chart options={options} series={seriesLocal} type='pie' width={width} height={height} />
            </div>
          </MessageBox>
        </div>
    </div>
    );
  }
}

export default PieChart;
