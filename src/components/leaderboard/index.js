import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchClanInformation } from '../../actions';

import './index.scss';

class Leaderboard extends Component {
  componentWillMount() {
    this.props.fetchClanInformation();
  }

  renderList() {
    return this.props.clan.members.map((member) => {
      return (
        <li key={member.tag} className='list-group-item'>
          <Link to={`members/${member.tag}`} href>
            <div className='row font-clash'>
              <div className='col-sm-2'>{member.rank}</div>
              <div className='col-sm-6'>
                <div className='row'>
                  <div className='col-sm-12 text-center'>{member.name}</div>
                </div>
                <div className='row'>
                  <div className='col-sm-12 text-center'><small>{member.role}</small></div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className='row'>
                  <div className='col-sm-12 text-center'>Donado:</div>
                </div>
                <div className='row'>
                  <div className='col-sm-12 text-center'>{member.donations}</div>
                </div>
              </div>
              <div className='col-sm-2'>
                {`${member.trophies} `}
                <img
                  src='/assets/img/Trophy.png'
                  alt={this.props.clan.badge.name}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    if (_.isEmpty(this.props.clan)) {
      return <div className='container'>Loading...</div>;
    }

    return (
      <div className='container'>
        <div className='col-sm-12 font-clash'>
          <div className='row'>
            <div className='col-sm-2'>
              <img
                src={this.props.clan.badge.image}
                alt={this.props.clan.badge.name}
              />
            </div>
            <div className='col-sm-10 text-center'>
              <h1>{this.props.clan.name}</h1>
              {this.props.clan.description}
            </div>
          </div>
        </div>
        <br />
        <ul className='list-group col-sm-12'>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clan: state.clan.clan,
  };
}

export default connect(mapStateToProps, { fetchClanInformation })(Leaderboard);

Leaderboard.defaultProps = {
  clan: {},
};

Leaderboard.propTypes = {
  clan: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  fetchClanInformation: PropTypes.func.isRequired,
};
