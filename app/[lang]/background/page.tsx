import {notFound} from "next/navigation"

import {ExperienceContent} from "../../experience-content"

export function generateStaticParams(){return [{lang:"en"}]}

export default async function BackgroundPage({params}:{params:Promise<{lang:string}>}){
  const {lang}=await params
  if(lang!=="en")notFound()
  return <ExperienceContent language="en"/>
}
