export const apiCall = (link: string) =>
  fetch(link).then((response) => response.json());
