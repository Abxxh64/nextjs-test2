import React from 'react'
import axios from 'axios';
import RenderBlocks from '../../utils/RenderBlocks';
import { notFound } from 'next/navigation';

export default async function Page({ params }: {params: {slug: string}}) {
    const pageData = await getPage(params.slug);

    if (!pageData) {
        notFound();
      }

    const { pageName, slug, layout } = pageData;

    return (
        <RenderBlocks layout={layout} />
  )
}


export async function generateStaticParams() {
  const listingsReq = await axios('api/pages?where[_status][equals]=published')
  const listingsData = listingsReq.data;
  // console.log("getting Pages")
  // console.log(listingsData.docs)
  return listingsData.docs.map(({slug}: {slug: string}) => {
          return {slug: slug}
      })
}
  


async function getPage(slug: string) {
  try {
    const response = await axios(`/api/pages?where[slug][equals]=${slug}&where[_status][equals]=published`);

    return response.data.docs[0];

  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}
