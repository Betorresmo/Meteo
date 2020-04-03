export default function getLocalTime(utcTimeInMs, timezoneInMs) {
  const systemTime = new Date();
  const offsetInMs = systemTime.getTimezoneOffset() * 60 * 1000;

  return new Date(utcTimeInMs + offsetInMs + timezoneInMs);
}
