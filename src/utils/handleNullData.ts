type Props = {
  content: any; // Replace 'any' with the appropriate type
  images: any; // Replace 'any' with the appropriate type

};

export default function handleNullData(data: any) {
  if (!data) {
    return null; // or display a loading state, error message, etc.
  }

  return data;
}