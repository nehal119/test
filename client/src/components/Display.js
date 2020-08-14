import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Header from './Header';
import { getUser } from '../actions';

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
  width: auto;
`;
const Container = styled.div`
  width: auto;
`;

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { oneuser } = this.props;
    return (
      <div className="Home">
        <Header />
        <div className="container">
          <MessageBox className="col-sm-8 col-sm-offset-2">
            {oneuser.length > 0 && <div>
              <Container>Entered Username : {oneuser[oneuser.length-1].name}</Container>
              <Container>Entered City : {oneuser[oneuser.length-1].city}</Container>
              <Container>Entered Email : {oneuser[oneuser.length-1].email}</Container>
              <Container>Entered Password : {oneuser[oneuser.length-1].password}</Container>
            </div>}
          </MessageBox>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { oneuser } = state;
  return {
    oneuser
  };
}

Home.defaultProps = {
  oneuser: {}
};

export default connect(mapStateToProps, { getUser })(Home);
