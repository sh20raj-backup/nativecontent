import ProfileDetailClient from "../../../components/ProfileDetailClient";

export function generateStaticParams() {
  return [
    { slug: "charles-copsey" },
    { slug: "christelle-de-castro" },
    { slug: "meg-gamez" },
    { slug: "ocean-jude" },
    { slug: "james-lees" },
    { slug: "maya-margolina" },
    { slug: "john-o-hagan" },
    { slug: "magellan-rubin" },
    { slug: "jasper-soloff" },
    { slug: "anton-watts" },
    { slug: "jonathan-zames" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollaboratorPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Format slug to human-readable name
  const name = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <ProfileDetailClient name={name} slug={slug} type="collaborator" />;
}
