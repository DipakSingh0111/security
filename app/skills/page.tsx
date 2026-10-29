import PageBanner from "@/components/shared/Banner";
import ShieldSkillsContent from "@/components/layout/skills/ShieldSkillsContent";
import SecurityCta from "@/components/homelayout/CTA";
import { getSkillsData } from "@/data";

const data = getSkillsData();

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
};

export default function SkillsPage() {
  const { banner } = data;

  return (
    <>
      <PageBanner
        title={banner.title}
        image={banner.image}
        items={banner.items}
      />
      <ShieldSkillsContent />
      <SecurityCta />
    </>
  );
}
