import _ from 'lodash';

export const generateMeta = (data) => {
  
  return _.map(data, (entries,) => {
    if (!entries.length) return {};

    // Sort entries by timestamp
    const sortedEntries = _.sortBy(entries, 'timestamp');
    
    const startDate = new Date(sortedEntries[0].timestamp);
    const endDate = new Date(sortedEntries[sortedEntries.length - 1].timestamp);
    
    const durationMinutes = Math.round((endDate - startDate) / (1000 * 60));

    return {
      startDate,
      endDate,
      durationMinutes,
      totalSummary: value.length
    };
  });
};