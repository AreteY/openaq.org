import React from 'react';
import { PropTypes as T } from 'prop-types';

import InfoMessage from '../../components/info-message';
import LoadingMessage from '../../components/loading-message';
import ProjectCard from './project-card';

export default function Results({
  fetched = true,
  fetching,
  error,
  projects = [],
  openDownloadModal,
}) {
  if (!fetched && !fetching) {
    return null;
  }

  if (fetching) {
    return <LoadingMessage />;
  }

  if (error) {
    return (
      <InfoMessage>
        <p>We coudn&apos;t get the data. Please try again later.</p>
        <p>
          If you think there&apos;s a problem, please{' '}
          <a href="mailto:info@openaq.org" title="Contact openaq">
            contact us.
          </a>
        </p>
      </InfoMessage>
    );
  }

  if (!projects.length) {
    return (
      <InfoMessage>
        <p>No data was found for your criteria.</p>
        <p>
          Maybe you&apos;d like to suggest a{' '}
          <a
            href="https://docs.google.com/forms/d/1Osi0hQN1-2aq8VGrAR337eYvwLCO5VhCa3nC_IK2_No/viewform"
            title="Suggest a new source"
          >
            new source
          </a>{' '}
          or{' '}
          <a href="mailto:info@openaq.org" title="Contact openaq">
            let us know
          </a>{' '}
          what location you&apos;d like to see data for.
        </p>
      </InfoMessage>
    );
  }

  return [
    {
      location: '',
      project: '',
      city: '',
      organization: '',
      count: 13,
      lastUpdated: '',
      firstUpdated: '',
    },
  ].map(o => {
    let openModal = () =>
      openDownloadModal({
        project: o.project,
      });
    return (
      <ProjectCard
        onDownloadClick={openModal}
        key={o.location}
        name={o.project}
        organization={o.city}
        sourceType={o.organization}
        projectData={o}
        totalMeasurements={o.count}
        lastUpdate={o.lastUpdated}
        collectionStart={o.firstUpdated}
      />
    );
  });
}

Results.propTypes = {
  fetched: T.bool,
  fetching: T.bool,
  error: T.bool,
  project: T.array,
  openDownloadModal: T.func,
};
