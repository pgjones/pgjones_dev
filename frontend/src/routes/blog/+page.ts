import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }): Promise<any> => {
  const response = await fetch("/v0/blogs/");
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
};
