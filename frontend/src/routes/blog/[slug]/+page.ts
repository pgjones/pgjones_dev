import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }): Promise<any> => {
  const response = await fetch(`/v0/blogs/${params.slug}/`);
  if (response.status === 200) {
    const data = await response.json();
    return { post: data };
  }
};
