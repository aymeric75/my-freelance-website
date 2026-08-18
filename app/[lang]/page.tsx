import { notFound } from "next/navigation"

import { HomeContent, type Language } from "../home-content"

export function generateStaticParams(){return [{lang:"fr"},{lang:"en"}]}

export default async function LocalizedHome({params}:{params:Promise<{lang:string}>}){
  const {lang}=await params
  if(lang!=="fr"&&lang!=="en")notFound()
  return <HomeContent language={lang as Language}/>
}
