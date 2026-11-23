
import { notFound } from "next/navigation";
import { branches } from "@/data/branches";
import BranchDetails from "@/app/component/Branches/BranchDetails";
import BranchBanner from "@/app/component/Branches/BranchBanner";

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const branch = branches.find((item) => item.slug === slug);

  if (!branch) {
    return {
      title: "Branch Not Found",
    };
  }

  return {
    title: `${branch.name} | Gorkha Physical Fitness Training Center`,
    description: branch.description,
  };
}

export default async function BranchPage({ params }) {
  const { slug } = await params;

  const branch = branches.find((item) => item.slug === slug);

  if (!branch) {
    notFound();
  }

  return (
    <main>
      <BranchBanner branch={branch} />
      <BranchDetails branch={branch} />

     
    </main>
  );
}
