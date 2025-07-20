import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Placeholder: In a real app, fetch project data by slug
  if (!params.slug) return notFound();
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Project: {params.slug.replace(/-/g, ' ')}</h1>
      <p className="text-slate-600 mb-6">Project details and case study coming soon.</p>
      <div className="bg-slate-100 rounded-lg p-6">
        <p>This page will show a deep dive into the project, including screenshots, your role, technologies used, and more.</p>
      </div>
    </div>
  );
} 