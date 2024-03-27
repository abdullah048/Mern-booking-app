export function convertToMilliSeconds(input: string) {
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = millisecondsPerSecond * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;

  const regex = /^(\d+)([d,h,m,s])$/;
  const match = input.match(regex);

  if (!match) {
    throw new Error(
      'Invalid input format. Please use formats like "1d" for 1 day, "1800s" for 1800 seconds, etc.'
    );
  }

  const value = parseInt(match[1]);
  const unit = match[2];

  switch (unit) {
    case 'd':
      return value * millisecondsPerDay;
    case 'h':
      return value * millisecondsPerHour;
    case 'm':
      return value * millisecondsPerMinute;
    case 's':
      return value * millisecondsPerSecond;
    default:
      throw new Error('Invalid unit. Please use one of: d, h, m, s');
  }
}
