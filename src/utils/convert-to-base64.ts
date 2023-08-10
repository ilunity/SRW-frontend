export const convertToBase64 = (file: Blob, onLoad: (base64: string) => void) => {
  const reader = new FileReader();

  reader.onloadend = () => {
    if (!reader.result) {
      return;
    }
    const base64 = reader.result.toString();

    onLoad(base64);
  };

  reader.readAsDataURL(file);
};
