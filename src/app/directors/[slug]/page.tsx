import ProfileDetailClient from "../../../components/ProfileDetailClient";

export function generateStaticParams() {
  return [
    { slug: "christo-anesti" },
    { slug: "sorrel-brae" },
    { slug: "melanie-chung" },
    { slug: "tristan-holmes" },
    { slug: "ben-lankester" },
    { slug: "eva-michon" },
    { slug: "robin-nishio" },
    { slug: "jorn-threlfall" },
    { slug: "adrian-vieni" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DirectorPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Format slug to human-readable name
  const name = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <ProfileDetailClient name={name} slug={slug} type="director" />;
}
