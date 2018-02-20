import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchMember } from '../../actions';

import './index.scss';

class MemberDetails extends Component {
  componentWillMount() {
    this.props.fetchMember(this.props.match.params.id);
  }

  render() {
    if (_.isEmpty(this.props.member)) {
      return <div className='container'>Loading...</div>;
    }

    return (
      <div className='container'>
        <h1>Member: {this.props.member.name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.member.member,
  };
}

export default connect(mapStateToProps, { fetchMember })(MemberDetails);

MemberDetails.defaultProps = {
  match: {},
  member: {},
};

MemberDetails.propTypes = {
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  member: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  fetchMember: PropTypes.func.isRequired,
};
