import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Header from './Header';
import { getTotalData } from '../actions';
import Chart from 'react-apexcharts';
const width = '100%';
const height = '100%';
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

class BarChart extends Component {
  componentDidMount() {
    let itr = 1
    this.props.getTotalData({itr: itr});
    const dataFetcher = setInterval(() => {
      itr = itr + 1
      this.props.getTotalData({itr: itr});
    }, 10000);
    setTimeout(function(){
      clearInterval(dataFetcher)
    }, 100000);
  }

  render() {
    const { totaldata } = this.props;
    const names = [];
    const sales = [];
    if ( totaldata && totaldata.length > 0) {
      for (let i=0; i < totaldata.length; i++) {
        names.push(totaldata[i].name)
        sales.push(totaldata[i].sales)
      }
    }
    var options = {
      series: [{
        data: sales
      }],
      chart: {
      type: 'bar',
      // height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: names,
    }
    };
    const series = [{
      data: sales
    }]

    return (
      <div className="BarChart">
        <Header />
        <div className="container">
          <MessageBox className="col-sm-8 col-sm-offset-2">
            { totaldata && totaldata.length > 0 && <Chart options={options} series={series} type='bar' width={width} height={height} />}
          </MessageBox>
        </div>
        <span style={{float: 'right'}}>Due to limitations of data, the app is pulling 100 queries every 10 seconds.</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { totaldata } = state;
  return {
    totaldata
  };
}

BarChart.defaultProps = {
  totaldata: []
};

export default connect(mapStateToProps, { getTotalData })(BarChart);

