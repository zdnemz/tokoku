export default function getTimeBasedGreeting(hour: number): string {
  if (hour >= 6 && hour < 11) {
    return 'Pagi';
  } else if (hour >= 11 && hour < 15) {
    return 'Siang';
  } else if (hour >= 15 && hour < 19) {
    return 'Sore';
  } else if (hour >= 19 || hour < 6) {
    return 'Malam';
  } else {
    return 'Halo';
  }
}
