export type Data = { id: number; thumb: string };
export type ItemsResponse = { data: Data[]; page: number };

export const fetchItems = async (query: {
  page: number;
}): Promise<ItemsResponse> => {
  const start = query.page * 30;

  const items = Array.from({ length: 30 }, (_, i) => i + start).map((id) => ({
    id,
    thumb: `https://picsum.photos/200?${id}`,
  }));

  await new Promise((r) => setTimeout(r, 500));

  return Promise.resolve({
    data: items,
    page: query.page,
  });
};
