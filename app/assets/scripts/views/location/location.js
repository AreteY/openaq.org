import React, { useState, useEffect } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';

import { openDownloadModal } from '../../actions/action-creators';
import config from '../../config';
import HeaderMessage from '../../components/header-message';
import Header from '../../components/header';
import CardList from '../../components/card-list';

import DetailsCard from '../../components/dashboard/details-card';
import LatestMeasurementsCard from '../../components/dashboard/lastest-measurements-card';
import SourcesCard from '../../components/dashboard/sources-card';
import MeasureandsCard from '../../components/dashboard/measurands-card';
import TemporalCoverageCard from '../../components/dashboard/temporal-coverage-card';
import TimeSeriesCard from '../../components/dashboard/time-series-card';

const Dashboard = styled(CardList)`
  padding: 2rem 4rem;
`;

const defaultState = {
  fetched: false,
  fetching: false,
  error: null,
  data: null,
};

function Location(props) {
  const { name } = props.match.params;

  const [{ fetched, fetching, error, data }, setState] = useState(defaultState);

  useEffect(() => {
    const fetchData = name => {
      setState(state => ({ ...state, fetching: true, error: null }));

      fetch(
        `${config.api}/locations?location=${encodeURIComponent(
          name
        )}&metadata=true`
      )
        .then(response => {
          if (response.status >= 400) {
            throw new Error('Bad response');
          }
          return response.json();
        })
        .then(
          json => {
            setState(state => ({
              ...state,
              fetched: true,
              fetching: false,
              data: json.results[0],
            }));
          },
          e => {
            console.log('e', e);
            setState(state => ({
              ...state,
              fetched: true,
              fetching: false,
              error: e,
            }));
          }
        );
    };

    fetchData(name);

    return () => {
      setState(defaultState);
    };
  }, []);

  if (!fetched && !fetching) {
    return null;
  }

  if (fetching) {
    return (
      <HeaderMessage>
        <h1>Take a deep breath.</h1>
        <div className="prose prose--responsive">
          <p>Location data is loading...</p>
        </div>
      </HeaderMessage>
    );
  }

  if (error || !data) {
    return (
      <HeaderMessage>
        <h1>Uh oh, something went wrong.</h1>
        <div className="prose prose--responsive">
          <p>
            There was a problem getting the data. If you continue to have
            problems, please let us know.
          </p>
          <p>
            <a href="mailto:info@openaq.org" title="Send us an email">
              Send us an Email
            </a>
          </p>
        </div>
      </HeaderMessage>
    );
  }

  function onDownloadClick() {
    props._openDownloadModal({
      country: data.country,
      area: data.city,
      location: data.location,
    });
  }

  const sources = data.sourceNames
    .map(o => _.find(props.sources, { name: o }))
    .filter(o => o);
  let added = [];
  if (props.measurements.data.attribution) {
    // filtering attribution[0] b/c it kept showing up with same name and url as sources[0]
    added = data.attribution.filter((src, index) => index !== 0);
  }

  console.log(JSON.stringify(data));
  return (
    <section className="inpage">
      <Header
        tagline="Location"
        title={data.location}
        subtitle={`in ${data.city}, ${data.country}`}
        action={{
          api: `${config.api}/locations?location=${data.location}`,
          download: onDownloadClick,
          compare: `/compare/${encodeURIComponent(data.location)}`,
        }}
      />
      <div className="inpage__body">
        <Dashboard
          gridTemplateRows={'repeat(4, 20rem)'}
          gridTemplateColumns={'repeat(12, 1fr)'}
          className="inner"
        >
          <DetailsCard
            measurements={data.count}
            coords={{
              lat: data.coordinates.latitude,
              lng: data.coordinates.longitude,
            }}
            date={{
              start: data.firstUpdated,
              end: data.lastUpdated,
            }}
          />
          <LatestMeasurementsCard parameters={data.parameters} />
          <SourcesCard sources={[...sources, ...added]} />
          <TimeSeriesCard
            locationId={data.location}
            parameters={data.parameters}
          />
          <MeasureandsCard parameters={data.parameters} />
          <TemporalCoverageCard
            parameters={data.parameters}
            spatial="location"
            id={data.location}
          />
        </Dashboard>
      </div>
    </section>
  );
}

Location.propTypes = {
  match: T.object,
  _openDownloadModal: T.func,
  sources: T.array,
  measurements: T.array,
};

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function selector(state) {
  return {
    sources: state.baseData.data.sources,
    measurements: state.measurements,
    latestMeasurements: state.latestMeasurements,
  };
}

function dispatcher(dispatch) {
  return {
    _openDownloadModal: (...args) => dispatch(openDownloadModal(...args)),
  };
}

export default connect(selector, dispatcher)(Location);
