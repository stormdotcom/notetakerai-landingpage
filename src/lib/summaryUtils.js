import _ from 'lodash';

export const generateSummaryMeta = (data) => {
  if (_.isEmpty(data)) return {};  // Safeguard for empty data

  const sortedEntries = _.sortBy(_.flattenDeep(data), (entry) => new Date(entry.timestamp));

  // Handle empty or invalid data
  if (_.isEmpty(sortedEntries)) return {
    startDate: "",
    endDate: "",
    durationMinutes: 0,
    totalSummary: "-"
  };

  // Extract start and end timestamps
  const startDate = sortedEntries[0].timestamp;
  const endDate = sortedEntries[sortedEntries.length - 1].timestamp;

  // Calculate duration in minutes
  const durationMinutes = Math.round(
    (new Date(endDate) - new Date(startDate)) / (1000 * 60)
  );

  return {
    startDate,
    endDate,
    durationMinutes,
    totalSummary: sortedEntries.length  // Total number of entries
  };
};
