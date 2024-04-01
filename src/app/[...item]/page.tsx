"use client";

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/");

  return <div>{path}</div>;
};

export default ItemPage;
