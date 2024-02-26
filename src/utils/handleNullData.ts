export default function handleNullData(data: any) {
  if (!data) {
    return null; // or display a loading state, error message, etc.
  }

  return data;
}
