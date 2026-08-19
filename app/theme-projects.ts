export const webProjects=[
  {title:"Florajet",year:"2018—2019",kind:"SEO & performance",description:{fr:"Revue SEO pilotée par les données, tests A/B et suivi analytique. Le site est passé de la 5e à la 3e position sur « livraison fleur » en un mois.",en:"Data-led SEO review, A/B testing and analytics monitoring. The site moved from fifth to third position for a strategic search term in one month."},skills:["SEO","A/B testing","Google Analytics","PrestaShop"]},
  {title:"Maison Bronzini",year:"2023",kind:"E-commerce",description:{fr:"Refonte complète d’un thème PrestaShop afin de proposer une expérience plus rapide, moderne et dynamique.",en:"Complete rebuild of a PrestaShop theme for a faster, more modern and dynamic customer experience."},skills:["PrestaShop","Front-end","Performance"]},
  {title:"Destination Saint-Camille",year:"2016",kind:"Plateforme de réservation",description:{fr:"Module WordPress de réservation permettant de composer un séjour à partir d’hébergements, de visites et d’un agenda administrable.",en:"WordPress booking module combining accommodation, activities and an administrable calendar."},skills:["WordPress","PHP","Custom fields"]},
  {title:"Ozon Digital",year:"2019—2020",kind:"Développement full-stack",description:{fr:"Développement de thèmes, modules métier, synchronisation de catalogues et gestion de commandes par API.",en:"Themes, business modules, catalogue synchronization and API-driven order management."},skills:["PrestaShop","APIs","Full-stack"]},
]

export const aiProjectCopy = {
  "bowling-pin-detection": {
    fr:{title:"Détection en temps réel des quilles de bowling",kind:"Application client",summary:"Un système complet de vision par ordinateur embarquée qui détecte un lancer et compte les quilles encore debout sur deux pistes."},
    en:{title:"Real-time bowling pin detection",kind:"Client application",summary:"A complete edge-computer-vision system that detects a throw and counts standing pins across two bowling lanes."},
  },
  "r-latplan": {
    fr:{title:"Apprentissage de plans fiables à partir d’images",kind:"Recherche doctorale · ICTAI 2024",summary:"Un framework neuro-symbolique qui apprend des modèles d’actions PDDL exécutables à partir de traces visuelles, même bruitées ou incomplètes."},
    en:{title:"Learning reliable plans from images",kind:"PhD research · ICTAI 2024",summary:"A neuro-symbolic framework that learns executable PDDL action models from raw visual traces—even when observations are noisy or incomplete."},
  },
  "market-impact-dynamics": {
    fr:{title:"Dynamiques interprétables de l’impact de marché",kind:"Prototype de recherche",summary:"Un pipeline expérimental transparent pour isoler l’impact de grands ordres sur les prix et découvrir les équations différentielles qui le décrivent."},
    en:{title:"Interpretable market-impact dynamics",kind:"Research prototype",summary:"A transparent experimental pipeline for isolating the price impact of large orders and discovering compact differential equations that describe it."},
  },
} as const

export const additionalAiProjects = [
  {
    id:"image-segmentation",group:"client",year:"2022",image:"/images/projects/image-segmentation.jpg",imageAlt:"Résultat d’une segmentation d’image par subdivision adaptative",href:"https://github.com/aymeric75/image-segmentation",
    copy:{fr:{title:"Segmentation adaptative d’images",kind:"Application client",summary:"Implémentation d’une méthode split-and-merge qui subdivise récursivement une image selon la variance locale afin d’en faire apparaître les régions homogènes."},en:{title:"Adaptive image segmentation",kind:"Client application",summary:"An implementation of a split-and-merge method that recursively divides an image according to local variance to reveal homogeneous regions."}},
  },
  {
    id:"visual-reward-machines",group:"research",year:"2023",image:"/images/projects/visual-reward-machines.png",imageAlt:"Environnement Visual Minecraft, automate de tâche et architecture Visual Reward Machine",href:"https://iris.uniroma1.it/retrieve/effc5951-c837-4f6e-8d87-602c781b07d2/Umili_Visual_2023.pdf",
    copy:{fr:{title:"Visual Reward Machines",kind:"Recherche doctorale",summary:"Un framework neuro-symbolique pour les tâches de reinforcement learning non markoviennes, capable d’apprendre conjointement l’ancrage des symboles dans les images et la structure temporelle des récompenses."},en:{title:"Visual Reward Machines",kind:"PhD research",summary:"A neuro-symbolic framework for non-Markovian reinforcement learning that jointly learns symbol grounding from images and the temporal reward structure."}},
  },
] as const
