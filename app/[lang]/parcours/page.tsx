import {notFound} from "next/navigation"

import {ExperienceContent} from "../../experience-content"

export function generateStaticParams(){return [{lang:"fr"}]}

export default async function ParcoursPage({params}:{params:Promise<{lang:string}>}){
  const {lang}=await params
  if(lang!=="fr")notFound()
  return <ExperienceContent language="fr"/>
}
