import React, { useState, useEffect } from 'react';
import { PropTypes as T } from 'prop-types';
import styled from 'styled-components';

import LoadingMessage from '../loading-message';
import InfoMessage from '../info-message';
import Card, {
  CardHeader as BaseHeader,
  CardSubtitle,
  CardTitle,
} from '../card';
import TabbedSelector from '../tabbed-selector';
import Map from '../mini-map';

const CardHeader = styled(BaseHeader)`
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-gap: 0.5rem;
`;

const ErrorMessage = () => (
  <div>
    <p>We couldn&apos;t get any data.</p>
    <InfoMessage>
      <p>Please try again later.</p>
      <p>
        If you think there&apos;s a problem, please{' '}
        <a href="mailto:info@openaq.org" title="Contact openaq">
          contact us.
        </a>
      </p>
    </InfoMessage>
  </div>
);

export default function MapCard({ parameters }) {
  const [activeTab, setActiveTab] = useState({
    id: parameters[0].measurand || parameters[0],
    name: parameters[0].measurand || parameters[0],
  });

  return (
    <Card
      gridColumn={'5  / 13'}
      renderHeader={() => (
        <CardHeader className="card__header">
          <TabbedSelector
            tabs={parameters.map(x => ({
              id: x.measurand || x,
              name: x.measurand || x,
            }))}
            activeTab={activeTab}
            onTabSelect={t => {
              setActiveTab(t);
            }}
          />

          <CardTitle>Total Count of Measurements</CardTitle>
        </CardHeader>
      )}
      renderBody={() => <Map style={{ height: `100%`, minHeight: `20rem` }} />}
    />
  );
}

MapCard.propTypes = {
  locationId: T.string,
  projectId: T.string,
  parameters: T.arrayOf(
    T.shape({
      measurand: T.string.isRequired,
    })
  ),
};
